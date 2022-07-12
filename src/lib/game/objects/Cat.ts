import * as PIXI from 'pixi.js';
import { GameObject } from "./GameObject";
import { cameraStore, dialogStore, tile } from "$lib/stores";

export class Cat extends GameObject {

    private portrait: string;
    private dialog: string;
    private containerLevel: any;
    private camera: any;

    constructor(config: any) {
        config.animatedSpriteSettings = { width: 2, height: 2, ...config.animatedSpriteSettings };
        config.containerSettings = { width: 2, height: 2, ...config.containerSettings };
        super(config);
        this.portrait = config.portrait;
        this.dialog = config.dialog;
        this.containerLevel = config.containerLevel;
        this.camera = config.camera;
        this.onInit();
    }

    onInit(): void {
        // Flip sprite to follow pointer
        this.containerLevel.on('pointermove', (e: any) => { this.followPointer(e); });
        // Handle Interaction
        this.container.interactive = true;
        this.container.on('pointerover', (e: any) => { this.onPointerOver(); });
        this.container.on('pointerdown', (e: any) => { this.onPointerDown(); });
        this.container.on('pointerout', (e: any) => { this.onPointerOut(); });
    }

    // Follow Pointer ---
    
    followPointer(e: any): void {
        const mouseX = Math.floor(e.data.global.x / tile.unit(1));
        const catPosX = Math.floor(this.container.position.x / tile.unit(1));
        const cameraX = Math.floor(this.camera.position.x / tile.unit(1));
        if (mouseX - cameraX <= catPosX) {
            this.mirrorSpriteOnX(1);
        } else {
            this.mirrorSpriteOnX(-1);
        }
    }

    mirrorSpriteOnX(newScale: number): void {
        if (this.animatedSprite.scale.x !== newScale) {
            this.animatedSprite.scale.x = newScale * 3; // 3?
        }
    }

    // Handle Interaction

    onPointerOver(): void {
        console.log('hover event');
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        this.container.filters = [filterEffect];
    }

    onPointerDown(): void {
        cameraStore.set({target: this, animate: true});
        // Remove existing dialog and replace with this dialog
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

    render(): void {}

}