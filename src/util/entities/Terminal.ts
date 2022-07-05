import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';

export class Terminal extends GameObject {

    constructor(config: any) {
        super(config);

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('pointerover', (e: any) => { this.onPointerOver(e, this); });
        this.containerGameObject.on('pointerout', (e: any) => { this.onPointerOut(e, this); });
        this.containerGameObject.on('pointerdown', (e: any) => { this.onPointerDown(e, this); });

        // Play
        this.animSprite.play();
    }

    animSpriteSettiongs(): void {
        this.animSprite.animationSpeed = 0.1;
        this.animSprite.width = this.grid.unit(1);
        this.animSprite.height = this.grid.unit(2);
    }

    onPointerOver(event: any, _this: any): void {
        let colorMatrixFilter: any = new PIXI.filters.ColorMatrixFilter();
            colorMatrixFilter.brightness(0.75);
        _this.containerGameObject.filters = [colorMatrixFilter];
    }
    
    onPointerOut(event: any, _this: any): void {
        _this.containerGameObject.filters = [];
    }

    onPointerDown(event: any, _this: any): void {
        console.log('Terminal onPointerDown() triggered');
    }

    render(): void {}

}