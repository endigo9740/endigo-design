import * as PIXI from 'pixi.js';
import { pathing } from '$lib/data/pathing';
import { tile } from '$lib/stores';

export class GameObject {
    
    // References
    public containerLevel: any;
    public camera: any;

    // Inherent Settings
    public name: string;
    public containerGameObject: any;
    public portrait: string;
    public animSprite: PIXI.AnimatedSprite;
    public x: number;
    public y: number;
    public pathing: string;
    public dialog: any;

    constructor(config: any) {
        // ---
        this.containerLevel = config.containerLevel;
        this.camera = config.camera;
        // ---
        this.name = config.name || 'MissingName';
        this.portrait = config.portrait;
        this.animSprite = config.animSprite;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.pathing = pathing[config.pathing] || pathing['idle'];
        this.dialog = config.dialog;
        // --
        this.onInit();
    }

    onInit(): void {
        this.animSpriteSettings();
        this.gameContainerSettings();
    }

    animSpriteSettings(): void {
        this.animSprite.animationSpeed = 0.15;
        this.animSprite.width = tile.unit(1);
        this.animSprite.height = tile.unit(1);
    }

    gameContainerSettings(): void {
        this.containerGameObject = new PIXI.Container();
        this.containerGameObject.x = tile.unit(this.x);
        this.containerGameObject.y = tile.unit(this.y);
        this.containerGameObject.width = tile.unit(1);
        this.containerGameObject.height = tile.unit(1);
        this.containerGameObject.addChild(this.animSprite);
        // Add to Level Container
        this.containerLevel.addChild(this.containerGameObject);
    }

}
