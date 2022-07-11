import * as PIXI from 'pixi.js';
import { tile } from "$lib/stores";
import { GameObject } from "./GameObject";

export class Bird extends GameObject {

    public debug: boolean = false;
    public radius: number = 12;
    public speed: number = 0.015;

    constructor(config: any) {
        super(config);
        this.birdSettings();
    }
    
    birdSettings(): void {
        // Enable pivot point visualization
        if (this.debug === true) { this.drawDebugRect(); }
        // Adjust Pivot Point
        this.containerGameObject.pivot.x = tile.unit(1)/2;
        this.containerGameObject.pivot.y = tile.unit(1)/2;
        // Extend circle radius
        this.animSprite.x += tile.unit(1) * this.radius;
        // Play animation immediately
        this.animSprite.play();
    }

    drawDebugRect(): void {
        const graphicPivotPoint = new PIXI.Graphics();
            graphicPivotPoint.beginFill(0xff0000);
            graphicPivotPoint.drawRect(0, 0, tile.unit(1), tile.unit(1));
        this.containerGameObject.addChild(graphicPivotPoint);
    }
    
    render(): void {
        this.containerGameObject.rotation += this.speed;
    }

}