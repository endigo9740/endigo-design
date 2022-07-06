import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { pageModalStore } from '$lib/PageModalStore';

export class Pillar extends GameObject {

    public page: any;

    constructor(config: any) {
        super(config);
        this.page = config.page || { component: 'About' };

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
        this.animSprite.width = this.grid.unit(3);
        this.animSprite.height = this.grid.unit(6);
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
        pageModalStore.set(this.page);
    }

    render(): void {}

}