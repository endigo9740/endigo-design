import * as PIXI from 'pixi.js';
import { Grid } from '../Grid';

export class GameObject {
    public name: string;
    public containerGameObject: any;
    public portrait: string;
    public animSprite: PIXI.AnimatedSprite;
    public grid: Grid = new Grid({});

    private containerLevel: any;
    private x: number;
    private y: number;
    public paths: any[] = [];
    public dialog: any;

    constructor(config: any) {
        this.name = config.name || 'MissingName';
        this.containerLevel = config.containerLevel;
        this.portrait = config.portrait;
        this.animSprite = config.animSprite;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.paths = config.paths || [];
        this.dialog = config.dialog;
        // Init
        this.init();
    }

    init(): void {
        // Animated Spritesheet Settings
        this.animSprite.animationSpeed = 0.15;
        this.animSprite.width = this.grid.unit(1);
        this.animSprite.height = this.grid.unit(1);

        // Game Object Container
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