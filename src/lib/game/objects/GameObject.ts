// This is the core class for which all entities extend. Controls core features of entities.

import * as PIXI from 'pixi.js';
import { cameraStore, tile } from '$lib/game/stores';
import { presetPaths } from '$lib/game/data/preset-paths';
import { dialogStore } from '$lib/game/stores';

export class GameObject {
	// Properties ---
	// WARNING: oder matters, do not change without precaution

	// Common
	public name: string;
	public loader: any;
	public resource: string;
	public portrait: string;

	// Pathing
	public pathName: string;
	public path: any;
	private pathProgress: number = tile.unit(1);
	private pathIndex: number = 0;
	private isWaiting: boolean = false;

	// Animated Sprite
	public animatedSprite: PIXI.AnimatedSprite;
	public animatedSpriteSettings: any = {
		animationSpeed: 0.15,
		width: 1,
		height: 1
	};
	public textureRotation: number = 0;

	// Container
	public container: PIXI.Container = new PIXI.Container();
	public containerSettings: any = {
		x: 0,
		y: 0,
		width: 1,
		height: 1
	};

	// Dialog
	public dialog: string;
	private dialogVisible: boolean = false;

	// Debug
	private debug: boolean = false;

	// Constructor ---

	constructor(config: any) {
		// Common
		this.name = config.name || 'DefaultGameObjectName';
		this.loader = config.loader;
		this.resource = config.resource;
		this.portrait = config.portrait || 'entities/portrait-default.png';
		// Pathing
		this.pathName = config.pathName;
		this.path = presetPaths[this.pathName || 'idle'];
		// Animated Sprite
		this.animatedSprite = this.createAnimatedSpritesheet();
		this.animatedSpriteSettings = { ...this.animatedSpriteSettings, ...config.animatedSpriteSettings };
		this.applyAnimatedSpriteSettings();
		// Container
		this.containerSettings = { ...this.containerSettings, ...config.containerSettings };
		this.applyContainerSettings();
		this.container.addChild(this.animatedSprite);
		// Dialog
		this.dialog = config.dialog || 'Hello, this is the default dialog text.';
		dialogStore.subscribe((d: any) => {
			this.dialogVisible = d !== undefined;
			this.animatedSprite.gotoAndStop(0);
		});
		// Interaction
		this.container.interactive = config.interactive || false;
		if (this.container.interactive) {
			this.container.on('pointerover', (e: any) => {
				this.onPointerOver();
			});
			this.container.on('pointerout', (e: any) => {
				this.onPointerOut();
			});
			this.container.on('pointerdown', (e: any) => {
				cameraStore.set({ type: 'entity', target: this, animate: true });
				this.onPointerDown();
			});
		}
		// Debug
		if (this.debug) {
			this.drawContainerBounds();
		}
	}

	// Debug Methods ---

	drawContainerBounds(): void {
		// Draw Rect
		let boundsGraphic = new PIXI.Graphics();
		boundsGraphic.beginFill(0xbada55, 0.5);
		boundsGraphic.drawRect(0, 0, this.containerSettings.width, this.containerSettings.height);
		// Add it to the stage to render
		this.container.addChild(boundsGraphic);
	}

	// Animated Sprite Sheet ---

	createAnimatedSpritesheet(): PIXI.AnimatedSprite {
		let sheet: any[] = this.loader.resources[this.resource].spritesheet.textures;
		return new PIXI.AnimatedSprite(Object.values(sheet));
	}

	// Should be - w: 144, h: 288
	applyAnimatedSpriteSettings(): void {
		// Convert select values to tile units
		this.animatedSpriteSettings.width = tile.unit(this.animatedSpriteSettings.width);
		this.animatedSpriteSettings.height = tile.unit(this.animatedSpriteSettings.height);
		// Apply settings
		for (const key in this.animatedSpriteSettings) {
			// @ts-ignore
			this.animatedSprite[key] = this.animatedSpriteSettings[key];
		}
		// Adjust anchor point to center
		this.animatedSprite.anchor.x = 0.5;
		this.animatedSprite.anchor.y = 0.5;
		this.animatedSprite.x += this.animatedSprite.width / 2;
		this.animatedSprite.y += this.animatedSprite.height / 2;
	}

	// Container ---

	applyContainerSettings(): void {
		// Convert select values to tile units
		this.containerSettings.x = tile.unit(this.containerSettings.x);
		this.containerSettings.y = tile.unit(this.containerSettings.y);
		this.containerSettings.width = tile.unit(this.containerSettings.width);
		this.containerSettings.height = tile.unit(this.containerSettings.height);
		// Apply settings
		for (const key in this.containerSettings) {
			// @ts-ignore
			this.container[key] = this.containerSettings[key];
		}
	}

	// Handle Input ---

	onPointerOver(): void {
		let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
		filterEffect.brightness(1.3, false);
		this.container.filters = [filterEffect];
	}

	onPointerDown(): void {
		dialogStore.set(undefined);
		dialogStore.set({
			name: this.name,
			message: this.dialog,
			portrait: this.portrait
		});
	}

	onPointerOut(): void {
		this.container.filters = [];
	}

	// Pathing

	pathing(): void {
		if (this.dialogVisible) return;
		if (this.isWaiting) return;
		// Execute current path, else switch to next path
		if (this.pathProgress > 0) {
			this.handleCurrentPathing();
		} else {
			this.nextPath();
		}
	}

	handleCurrentPathing(): void {
		// Animate while moving
		if (this.animatedSprite.playing === false) {
			this.animatedSprite.play();
		}
		// Determine direction to move and texture rotation
		// https://pixijs.io/examples/#/textures/texture-rotate.js
		const currentPath: any = this.path[this.pathIndex];
		if (currentPath.direction === 'up') {
			this.container.y -= 1;
		} else if (currentPath.direction === 'left') {
			// this.animatedSprite.texture.rotate = 12;
			this.mirrorAxisX(-1);
			this.container.x -= 1;
		} else if (currentPath.direction === 'down') {
			this.container.y += 1;
		} else if (currentPath.direction === 'right') {
			// this.animatedSprite.texture.rotate = 0;
			this.mirrorAxisX(1);
			this.container.x += 1;
		} else if (currentPath.direction === 'wait') {
			this.handleWait(currentPath.delay);
		} else {
			console.error('ERROR: unknown pathing direction');
		}
		// Update progress amount
		this.pathProgress -= 1;
	}

	mirrorAxisX(newScale: number): void {
		if (this.container.scale.x !== newScale) {
			if (newScale === -1) {
				this.container.scale.x *= -1;
			} else {
				this.container.scale.x = 1;
			}
			this.container.x -= this.container.width;
		}
	}

	handleWait(delay: number): void {
		this.isWaiting = true;
		this.animatedSprite.gotoAndStop(0);
		setTimeout(() => {
			this.isWaiting = false;
			this.pathProgress = 0;
			this.nextPath();
		}, delay);
	}

	nextPath(): void {
		if (this.pathProgress > 0) {
			return;
		}
		// Loop to next path array value
		this.pathIndex + 1 >= this.path.length ? (this.pathIndex = 0) : this.pathIndex++;
		// Fuel path prorgression meter
		this.pathProgress = tile.unit(1);
	}

	// Rendering

	render(elapsed?: number): void {
		// if (elapsed && Math.floor(elapsed) % 2 === 0) { return; } // slow speed
		this.pathing();
	}
}
