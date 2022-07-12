import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { cameraStore } from '../../stores';
import { pageModalStore } from '$lib/stores';

export class Pillar extends GameObject {

    public found: boolean = false;
    public page: any = {
        component: 'Work',
        category: null,
        id: null
    };

    constructor(config: any) {
        // Merge and overwrite Inherited Config Settings
        config.resource = 'pillar.json';
        config.animatedSpriteSettings = { animationSpeed: 0.3, width: 3, height: 6, ...config.animatedSpriteSettings };
        config.containerSettings = { width: 3, height: 6, ...config.containerSettings };
        super(config);
        // Unique Pillar Config Settings
        this.page = { ...this.page, ...config.page};
        // Handle Input
        this.container.interactive = true;
        this.container.on('pointerover', () => { this.onPointerOver(); });
        this.container.on('pointerout', () => { this.onPointerOut(); });
        this.container.on('pointerdown', () => { this.onPointerDown(); });
    }

    onPointerOver(): void {
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        this.container.filters = [filterEffect];
    }
    
    onPointerOut(): void {
        this.container.filters = [];
    }

    onPointerDown(): void {
        cameraStore.set({target: this, animate: true});
        pageModalStore.set(this.page);
        this.found = true;
        this.animatedSprite.play();
    }

}
