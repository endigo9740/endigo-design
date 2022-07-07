import * as PIXI from 'pixi.js';
import { Grid } from '../Grid';
import { pathing } from '$lib/pathing';

export class GameObject {
    public name: string;
    public containerGameObject: any;
    public portrait: string;
    public animSprite: PIXI.AnimatedSprite;
    public grid: Grid = new Grid({});
    public x: number;
    public y: number;

    private containerLevel: any;
    public camera: any;
    public pathing: string;
    public dialog: any;

    constructor(config: any) {
        this.name = config.name || 'MissingName';
        this.containerLevel = config.containerLevel;
        this.portrait = config.portrait;
        this.animSprite = config.animSprite;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.pathing = pathing[config.pathing] || pathing['idle'];
        this.dialog = config.dialog;
        this.camera = config.camera;
        // Init
        this.init();
    }

    init(): void {
        this.animSpriteSettings();
        this.gameContainerSettiongs();
    }

    animSpriteSettings(): void {
        this.animSprite.animationSpeed = 0.15;
        this.animSprite.width = this.grid.unit(1);
        this.animSprite.height = this.grid.unit(1);
    }

    gameContainerSettiongs(): void {
        this.containerGameObject = new PIXI.Container();
        this.containerGameObject.x = this.grid.unit(this.x);
        this.containerGameObject.y = this.grid.unit(this.y);
        this.containerGameObject.width = this.grid.unit(1);
        this.containerGameObject.height = this.grid.unit(1);
        this.containerGameObject.addChild(this.animSprite);
        // Add to Level Container
        this.containerLevel.addChild(this.containerGameObject);
    }

}