import * as PIXI from 'pixi.js';
import { GameObject } from './GameObject';
import { cameraStore } from '$lib/stores';
import { pageModalStore } from '$lib/stores';

export class Monument extends GameObject {

    public page: any = { component: 'About', category: null, id: null };

    constructor(config: any) {
        // Merge and overwrite Inherited Config Settings
        config.resource = 'entities/monument.json';
        config.animatedSpriteSettings = { animationSpeed: 0.05, width: 3, height: 6, ...config.animatedSpriteSettings };
        config.containerSettings = { width: 3, height: 6, ...config.containerSettings };
        super(config);
        // Unique Monument Config Settings
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
        cameraStore.set({type: 'entity', target: this, animate: true});
        pageModalStore.set(this.page);
        this.animatedSprite.gotoAndStop(1);
    }

}
