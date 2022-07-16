// This is the core class for which all entities extend. Controls core features of entities.

import * as PIXI from 'pixi.js';
import { tile } from '$lib/stores';

export class GameObject {

    private debug: boolean = false;

    public name: string;
    public loader: any;
    public resource: string;

    public animatedSprite: PIXI.AnimatedSprite;
    public animatedSpriteSettings: any = {
        animationSpeed: 0.15,
        width: 1,
        height: 1
    };
    
    public container: PIXI.Container = new PIXI.Container();
    public containerSettings: any = {
        x: 0,
        y: 0,
        width: 1,
        height: 1
    };

    constructor(config: any) {
        this.name = config.name || 'DefaultName';
        this.loader = config.loader;
        this.resource = config.resource;
        // Animated Sprite
        this.animatedSprite = this.createAnimatedSpritesheet();
        this.animatedSpriteSettings = { ...this.animatedSpriteSettings, ...config.animatedSpriteSettings};
        this.applyAnimatedSpriteSettings();
        // Container
        this.containerSettings = { ...this.containerSettings, ...config.containerSettings};
        this.applyContainerSettings();
        // Add Animated Sprite to Container
        if (this.debug) { this.drawContainerBounds(); }
        this.container.addChild(this.animatedSprite);
    }

    drawContainerBounds(): void {
        // Draw Rect
        let boundsGraphic = new PIXI.Graphics();
        boundsGraphic.beginFill(0xff0000, 0.5);
            boundsGraphic.drawRect(0, 0, this.containerSettings.width, this.containerSettings.height);
        // Add it to the stage to render
        this.container.addChild(boundsGraphic);
    }

    // Animated Sprite Sheet ---
    
    createAnimatedSpritesheet(): PIXI.AnimatedSprite {
        let sheet: any[] = this.loader.resources[this.resource].spritesheet.textures;
        return new PIXI.AnimatedSprite(Object.values(sheet));
    }
    
    // Should be - w: 144, h: 288
    applyAnimatedSpriteSettings(): void {
        // Convert select values to tile units
        this.animatedSpriteSettings.width = tile.unit(this.animatedSpriteSettings.width);
        this.animatedSpriteSettings.height = tile.unit(this.animatedSpriteSettings.height);
        // Apply settings
        for (const key in this.animatedSpriteSettings) {
            // @ts-ignore
            this.animatedSprite[key] = this.animatedSpriteSettings[key];
        }
        // Adjust anchor point to center
        this.animatedSprite.anchor.x = 0.5;
        this.animatedSprite.anchor.y = 0.5;
        this.animatedSprite.x += this.animatedSprite.width / 2;
        this.animatedSprite.y += this.animatedSprite.height / 2;
    }

    // Container ---
    
    applyContainerSettings(): void {
        // Convert select values to tile units
        this.containerSettings.x = tile.unit(this.containerSettings.x);
        this.containerSettings.y = tile.unit(this.containerSettings.y);
        this.containerSettings.width = tile.unit(this.containerSettings.width);
        this.containerSettings.height = tile.unit(this.containerSettings.height);
        // Apply settings
        for (const key in this.containerSettings) {
            // @ts-ignore
            this.container[key] = this.containerSettings[key];
        }
    }

}
