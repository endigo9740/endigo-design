import * as PIXI from 'pixi.js';
import { Grid } from './Grid';

export class Person {
    public sprite: any;

    private container: any;
    private imageSrc: string = '';

    // Local X/Y Position
    private grid: Grid = new Grid({});
    private x: number;
    private y: number;

    // Movement
    private movementProgress: number = this.grid.unit(1);
    private movementIndex: number = 0;
    private movementPaths: string[] = ['right', 'left', 'left', 'right'];

    constructor(config: any) {
        this.container = config.container;
        this.imageSrc = config.imageSrc || 'npc-default.png';
        this.x = config.x || 0;
        this.y = config.y || 0;
        // On Init()
        this.init();
        // Movement Interval
        setInterval(() => { this.pathing(); }, 2000);
    }

    init(): void {
        this.sprite = PIXI.Sprite.from(this.imageSrc);
        this.sprite.x = this.grid.unit(this.x);
        this.sprite.y = this.grid.unit(this.y);
        this.sprite.width = this.grid.unit(1);
        this.sprite.height = this.grid.unit(1);

        // Add to Container
        this.container.addChild(this.sprite);
    }

    render(): void {
        if (this.movementProgress > 0) {
            switch(this.movementPaths[this.movementIndex]) {
                case 'up': this.sprite.y -= 1; break;
                case 'left': this.sprite.x -= 1; break;
                case 'down': this.sprite.y += 1; break;
                case 'right': this.sprite.x += 1; break;
            }
            this.movementProgress -= 1;
        }
    }

    pathing(): void {
        this.movementProgress = this.grid.unit(1);
        (this.movementIndex+1) >= this.movementPaths.length ? this.movementIndex = 0 :  this.movementIndex++;
    }

}