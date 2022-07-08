import * as PIXI from 'pixi.js';
import { tile } from '$lib/stores';

export class Grid {
    private container: any;
    public enabled: boolean = false;
    public coords: boolean = false;

    constructor(config: any) {
        this.enabled = config.enabled || false;
        this.coords = config.coords || false;
        this.container = config.container || null;
        // Generate Custom Bitmap Font
        PIXI.BitmapFont.from('EndigoFont', { fill: "#FFFFFF", fontSize: 10, fontWeight: 'bold' });

        // Init
        this.onInit();
    }

    onInit(): void {
        if (this.enabled || this.coords) { this.loopTiles(); }
    }

    loopTiles(): void {
        const worldWidth = this.container.width / tile.unit(1);
        const worldHeight = this.container.height / tile.unit(1);
        for (let y = 0; y < worldHeight; y++) {
            for (let x = 0; x < worldWidth; x++) {
                if (this.enabled) { this.renderGrid(x, y); }
                if (this.coords) { this.renderCoords(x, y); }
            }
        }
    }

    // Renders a visible grid at the exact tile unit size
    renderGrid(x: number, y: number): void {
        let graphicCell = new PIXI.Graphics();
            graphicCell.lineStyle(1, 0x000000, 0.1);
            graphicCell.drawRect(tile.unit(x), tile.unit(y), tile.unit(1), tile.unit(1));
        this.container.addChild(graphicCell);
    }

    // Rendered text coordinates for each grid unit, ex: (x,y)
    renderCoords(x: number, y: number): void {
        const textCoords = new PIXI.BitmapText(`${x} x ${y}`, { fontName: 'EndigoFont' });
                textCoords.x = tile.unit(x+0.5);
                textCoords.y = tile.unit(y+0.5);
                textCoords.anchor.x = 0.5;
                textCoords.anchor.y = 0.5;
        this.container.addChild(textCoords);
    }
}