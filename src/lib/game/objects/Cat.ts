import * as PIXI from 'pixi.js';
import { GameObject } from "./GameObject";
import { cameraStore, dialogStore, tile } from "$lib/stores";

export class Cat extends GameObject {

    private portrait: string;
    private dialog: string;
    private containerLevel: any;
    private camera: any;

    private directionX: number = 0; // 0: default, 12: flip X

    constructor(config: any) {
        config.animatedSpriteSettings = { animationSpeed: 0.05, width: 2, height: 2, ...config.animatedSpriteSettings };
        config.containerSettings = { width: 2, height: 2, ...config.containerSettings };
        super(config);
        this.portrait = config.portrait;
        this.dialog = config.dialog;
        this.containerLevel = config.containerLevel;
        this.camera = config.camera;
        this.onInit();
    }

    onInit(): void {
        this.animatedSprite.play();
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
        const mousePositionX = Math.round(e.data.global.x);
        const catPositionX = this.container.position.x + this.camera.position.x;
        this.directionX = mousePositionX < catPositionX ? 0 : 12; // 0: default, 12: flip X
    }

    // Handle Interaction

    onPointerOver(): void {
        let filterEffect: any = new PIXI.filters.ColorMatrixFilter();
            filterEffect.brightness(1.3, false);
        this.container.filters = [filterEffect];
    }

    onPointerDown(): void {
        cameraStore.set({type: 'entity', target: this, animate: true});
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

    render(): void {
        // Ensure the X direction is applied continously since the sprite animates (texture changes)
        this.animatedSprite.texture.rotate = this.directionX;
    }

}