import * as PIXI from 'pixi.js';
import { Grid } from '../Grid';

/*
TODO:
- Implement spritesheet
- Spritesheet animation loops
- Idle + directional animations
*/

export class GameObject {
    public containerGameObject: any;
    private containerLevel: any;
    private imageSrc: string = '';

    public grid: Grid = new Grid({});
    private x: number;
    private y: number;

    public paths: any[] = [];

    constructor(config: any) {
        this.containerLevel = config.containerLevel;
        this.imageSrc = config.imageSrc || 'npc-default.png';
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.paths = config.paths || [];
        // Init
        this.init();
    }

    init(): void {
        const sprite = PIXI.Sprite.from(this.imageSrc);

        this.containerGameObject = new PIXI.Container();
        this.containerGameObject.x = this.grid.unit(this.x);
        this.containerGameObject.y = this.grid.unit(this.y);
        this.containerGameObject.width = this.grid.unit(1);
        this.containerGameObject.height = this.grid.unit(1);
        this.containerGameObject.addChild(sprite);

        // Handle Interaction
        this.containerGameObject.interactive = true;
        this.containerGameObject.on('click', this.interaction);

        // Add to Level Container
        this.containerLevel.addChild(this.containerGameObject);
    }

    interaction(e: any): void { console.log('GameObject was clicked.'); }

}