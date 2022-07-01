import * as PIXI from 'pixi.js';
import { Grid } from '../Grid';

export class GameObject {
    public containerGameObject: any;
    private containerLevel: any;
    public animSprite: PIXI.AnimatedSprite;

    public grid: Grid = new Grid({});
    private x: number;
    private y: number;

    public paths: any[] = [];

    constructor(config: any) {
        this.containerLevel = config.containerLevel;
        this.animSprite = config.animSprite;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.paths = config.paths || [];
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

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('click', this.interaction);

        // Add to Level Container
        this.containerLevel.addChild(this.containerGameObject);
    }

    interaction(e: any): void { console.log('GameObject default click handler triggered.'); }

}