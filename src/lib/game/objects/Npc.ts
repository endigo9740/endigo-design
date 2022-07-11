import * as PIXI from 'pixi.js';
import { tile } from '$lib/stores';
import { GameObject } from './GameObject';
import { presetPaths } from '$lib/data/preset-paths';
import { cameraStore } from '$lib/stores';
import { dialogStore } from '$lib/stores';

export class Npc extends GameObject {

    public portrait: string;
    public dialog: string;

    private path: any;
    private pathProgress: number = tile.unit(1);
    private pathIndex: number = 0;
    private flipX: boolean = false;
    private isWaiting: boolean = false;
    private animationsPaused: boolean = true;

    constructor(config: any) {
        // Hardcoded
        config.animatedSpriteSettings = { animationSpeed: 0.15, width: 2, height: 3, ...config.animatedSpriteSettings };
        config.containerSettings = { width: 2, height: 3, ...config.containerSettings };
        super(config);
        // NPC Settings
        this.path = presetPaths[config.path] || presetPaths['idle'];
        this.portrait = config.portrait || 'portrait.png';
        this.dialog = config.dialog || 'DefaultText';
        // Handle Interaction
        this.container.interactive = true;
        this.container.on('pointerover', (e: any) => { this.onPointerOver(); });
        this.container.on('pointerdown', (e: any) => { this.onPointerDown(); });
        this.container.on('pointerout', (e: any) => { this.onPointerOut(); });
        // Handle Dialog open state
        dialogStore.subscribe((d: any) => { this.animationsPaused = d === undefined; });
        // Draw shadow with graphic
        this.addShadow();
    }

    // Handle Pathing Movement ---

    movement(): void {
        if (this.path.length <= 0) return;
        if (this.isWaiting) return;
        if (this.animationsPaused === false) { this.animatedSprite.gotoAndStop(0); return };
        // Run Current Path
        if (this.pathProgress >= 0) {
            // Animate
            if (this.animatedSprite.playing === false) { this.animatedSprite.play(); } 
            // Pathing
            const currentPath: any = this.path[this.pathIndex];
            switch(currentPath.path) {
                case 'up': this.container.y -= 1; break;
                case 'left': this.container.x -= 1; this.toggleFlip(true); break;
                case 'down': this.container.y += 1; break;
                case 'right': this.container.x += 1; this.toggleFlip(false); break;
                case 'wait':
                    this.isWaiting = true;
                    this.animatedSprite.gotoAndStop(0);
                    setTimeout(() => {
                        this.isWaiting = false;
                        this.triggerNextPath();
                    }, currentPath.delay);
                    break;
            }
            this.pathProgress -= 1;
        }
        // Switch to Next Path
        if (this.pathProgress <= 0) { this.triggerNextPath(); }
    }

    triggerNextPath(): void {
        this.pathProgress = tile.unit(1);
        (this.pathIndex+1) >= this.path.length ? this.pathIndex = 0 :  this.pathIndex++;
    }

    toggleFlip(newValue: boolean): void {
        if (this.flipX !== newValue) {
            this.flipX = newValue;
            if (this.flipX === true) {
                // Flip Left
                this.container.scale.x *= -1
                this.container.x += tile.unit(2);
            } else {
                // Flip Right
                this.container.scale.x = 1;
                this.container.x -= tile.unit(2);
            }
        }
    }

    // Handle Input ---

    onPointerOver(): void {
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        this.container.filters = [filterEffect];
    }

    onPointerDown(): void {
        cameraStore.set({target: this, animate: true}); // TODO: implement this
        // Clear prior, set new
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

    // Draw Shadow ---

    addShadow(): void {
        const graphicShadow = new PIXI.Graphics();
            graphicShadow.beginFill(0x000000, 0.15);
            graphicShadow.drawEllipse(tile.unit(1), tile.unit(1)*2.5, tile.unit(1)/2, tile.unit(1)/4);
            graphicShadow.endFill();
            graphicShadow.filters = [new PIXI.filters.BlurFilter(5)];
        // Add to Level Container
        this.container.addChild(graphicShadow);
    }

    // Render ---

    render(): void {
        this.movement();
    }

}