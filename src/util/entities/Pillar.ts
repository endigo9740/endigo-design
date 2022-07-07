import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { pageModalStore } from '$lib/PageModalStore';

export class Pillar extends GameObject {

    public page: any;
    public found: boolean = false;

    constructor(config: any) {
        super(config);
        this.page = config.page || { component: 'About' };

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('pointerover', (e: any) => { this.onPointerOver(e, this); });
        this.containerGameObject.on('pointerout', (e: any) => { this.onPointerOut(e, this); });
        this.containerGameObject.on('pointerdown', (e: any) => { this.onPointerDown(e, this); });
    }

    animSpriteSettiongs(): void {
        this.animSprite.animationSpeed = 0.2;
        this.animSprite.width = this.grid.unit(3);
        this.animSprite.height = this.grid.unit(6);
    }

    onPointerOver(event: any, _this: any): void {
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        _this.containerGameObject.filters = [filterEffect];
    }
    
    onPointerOut(event: any, _this: any): void {
        _this.containerGameObject.filters = [];
    }

    onPointerDown(event: any, _this: any): void {
        pageModalStore.set(this.page);
        // Set Found state
        this.found = true;
        this.animSprite.play();
    }

    render(): void {}

}