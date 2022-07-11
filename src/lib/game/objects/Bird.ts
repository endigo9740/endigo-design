import * as PIXI from 'pixi.js';
import { tile } from "$lib/stores";
import { GameObject } from "./GameObject";

export class Bird extends GameObject {

    public debug: boolean = false;
    public radius: number = 12;
    public speed: number = 0.015;

    constructor(config: any) {
        super(config);
        this.onInit();
    }

    onInit(): void {
        // Enable pivot point visualization
        if (this.debug === true) { this.drawDebugRect(); }
        // Adjust Pivot Point
        this.container.pivot.x = tile.unit(0.5);
        this.container.pivot.y = tile.unit(0.5);
        // Extend circle radius
        this.animatedSprite.x += tile.unit(this.radius);
        // Play animation immediately
        this.animatedSprite.play();
    }
    
    drawDebugRect(): void {
        const graphicPivotPoint = new PIXI.Graphics();
            graphicPivotPoint.beginFill(0xff0000);
            graphicPivotPoint.drawRect(0, 0, tile.unit(1), tile.unit(1));
        this.container.addChild(graphicPivotPoint);
    }
    
    render(): void {
        this.container.rotation += this.speed;
    }

}