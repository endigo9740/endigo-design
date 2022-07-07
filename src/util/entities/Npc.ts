import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { dialogStore } from '$lib/DialogStore';

export class Npc extends GameObject {

    private pathingProgress: number = this.grid.unit(1);
    private pathingIndex: number = 0;
    private movementAllowed: boolean = true;

    constructor(config: any) {
        super(config);

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('pointerover', (e: any) => { this.onPointerOver(); });
        this.containerGameObject.on('pointerdown', (e: any) => { this.onPointerDown(); });
        this.containerGameObject.on('pointerout', (e: any) => { this.onPointerOut(); });

        // Handle Dialog open state
        dialogStore.subscribe((d: any) => {
            this.movementAllowed = d === undefined;
            this.animSprite.gotoAndStop(0);
        });
    }

    render(): void {
        if (this.pathing.length > 0) { this.movement(); }
    }

    movement(): void {
        if (this.movementAllowed === false) return;
        // Run Current Path
        if (this.pathingProgress >= 0) {
            // Animate
            if (this.animSprite.playing === false) { this.animSprite.play(); } 
            // Pathing
            const currentPath: any = this.pathing[this.pathingIndex];
            switch(currentPath.path) {
                case 'up': this.containerGameObject.y -= 1; break;
                case 'left': this.containerGameObject.x -= 1; break;
                case 'down': this.containerGameObject.y += 1; break;
                case 'right': this.containerGameObject.x += 1; break;
                case 'wait':
                    this.animSprite.gotoAndStop(0);
                    setTimeout(() => {}, currentPath.delay);
                    break;
            }
            this.pathingProgress -= 1;
        }
        // Switch to Next Path
        if (this.pathingProgress <= 0) {
            this.pathingProgress = this.grid.unit(1);
            (this.pathingIndex+1) >= this.pathing.length ? this.pathingIndex = 0 :  this.pathingIndex++;
        }
    }

    onPointerOver(): void {
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        this.containerGameObject.filters = [filterEffect];
    }

    onPointerDown(): void {
        this.camera.centerOnTarget(this);
        dialogStore.set({
            name: this.name,
            message: this.dialog,
            portrait: this.portrait
        });
    }
    
    onPointerOut(): void {
        this.containerGameObject.filters = [];
    }

}