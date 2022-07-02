import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { dialogStore } from '$lib/DialogStore';

export class Npc extends GameObject {

    private pathingProgress: number = this.grid.unit(1);
    private pathingIndex: number = 0;

    constructor(config: any) {
        super(config);
        // this.addShadow();

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('pointerdown', (e: any) => { this.onPointerDown(e, this); });
        this.containerGameObject.on('pointerover', (e: any) => { this.onPointerOver(e, this); });
        this.containerGameObject.on('pointerout', (e: any) => { this.onPointerOut(e, this); });
    }

    // addShadow(): void {
    //     this.animSprite.y -= this.grid.unit(1)/3; // shift up half tile
    //     const graphicShadow  = new PIXI.Graphics();
    //         graphicShadow.beginFill(0x000000, 0.2);
    //         graphicShadow.drawEllipse(this.grid.unit(1)/2+10, this.grid.unit(1)/2-10, this.grid.unit(1)/2, this.grid.unit(1)/4);
    //         graphicShadow.endFill();
    //     this.containerGameObject.addChildAt(graphicShadow, 0);
    // }

    render(): void {
        if (this.pathing.length > 0) { this.movement(); }
    }

    movement(): void {
        // Run Current Path
        if (this.pathingProgress >= 0) {
            // Animate
            if (this.animSprite.playing === false) { this.animSprite.play() } 
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

    onPointerDown(event: any, _this: any): void {
        dialogStore.set({
            name: _this.name,
            message: _this.dialog,
            portrait: _this.portrait
        });
    }

    onPointerOver(event: any, _this: any): void {
        let colorMatrixFilter: any = new PIXI.filters.ColorMatrixFilter();
            colorMatrixFilter.brightness(0.75);
        _this.containerGameObject.filters = [colorMatrixFilter];
    }
    
    onPointerOut(event: any, _this: any): void {
        _this.containerGameObject.filters = [];
    }

}