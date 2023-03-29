// Create a black particle effect that eminates from the ground

import * as PIXI from 'pixi.js';
import { tile } from '$lib/game/stores';
import { randomRangeWhole } from '../utils';

// Each individual Pixel
class Pixel {
	private pixelSize: number = 4;

	private width: number = this.pixelSize; // NOTE: change to 1;
	private height: number = this.pixelSize;
	private x: number;
	private y: number;

	public container: PIXI.Container = new PIXI.Container();
	private pixelArr: any[];

	private pixelGraphic: PIXI.Graphics = new PIXI.Graphics();

	constructor(config: any) {
		// Provided
		this.container = config.container;
		this.pixelArr = config.pixelArr;
		// Set
		this.x = randomRangeWhole(1, config.container.width - this.width);
		this.y = randomRangeWhole(0, config.container.height);
		// Draw Graphic and Add to Container
		this.draw();
	}

	draw(): void {
		this.pixelGraphic.beginFill(0x000000, 1);
		this.pixelGraphic.drawRect(this.x, this.y, this.width, this.height);
		// Add graphics container to parent container
		this.container.addChild(this.pixelGraphic);
	}

	render(elapsed: number): void {
		if (this.pixelGraphic.alpha <= 0) {
			this.destory();
			return;
		}
		// Animate
		if (Math.floor(elapsed) % 2 === 1) {
			this.pixelGraphic.y -= 0.3;
		} // Y pos
		this.pixelGraphic.alpha -= 0.0075; // alpha
	}

	destory(): void {
		this.pixelArr.shift();
		this.pixelGraphic.destroy();
	}
}

// The container which spawns and holds multiple pixels
export class EffectDarkness {
	public debug: boolean = false;

	public container: PIXI.Container = new PIXI.Container();
	public x: number;
	public y: number;
	private width: number = tile.unit(2);
	private height: number = tile.unit(2);

	public pixelArr: any[] = [];

	constructor(config: any) {
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.onInit();
	}

	onInit(): void {
		// Position
		this.container.x = tile.unit(this.x);
		this.container.y = tile.unit(this.y);
		// DEBUG: show container bounds
		this.containerSettings();
		// Generate Shards on Interval
		this.generatePixels();
	}

	containerSettings(): void {
		// Draw Rect
		let boundsGraphic = new PIXI.Graphics();
		if (this.debug) {
			boundsGraphic.beginFill(0xff0000, 0.5);
		}
		boundsGraphic.drawRect(0, 0, this.width, this.height);
		// Add it to the stage to render
		this.container.addChild(boundsGraphic);
	}

	generatePixels(): void {
		// this.pixelArr.push(new Pixel({ container: this.container, pixelArr: this.pixelArr }));
		setInterval(() => {
			this.pixelArr.push(new Pixel({ container: this.container, pixelArr: this.pixelArr }));
		}, 100);
	}
}
