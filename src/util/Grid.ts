// Grid Handler
import * as PIXI from 'pixi.js';

export class Grid {
    public enabled: boolean = false;
    public labeled: boolean = false;

    private container: any;

    private tileSize: number = 16 * 3; // px/zoom
    private width: number = 128; // tiles
    private height: number = 128; // tiles
    
    constructor(config: any) {
        this.enabled = config.enabled || false;
        this.labeled = config.labeled || false;
        this.container = config.container || null;
        if (this.container) {
            this.init();
        }
    }

    init(): void {
        if (this.enabled) { this.drawGrid(); }
        if (this.labeled) { this.drawLabels(); }
    }

    // Provides Grid Unit
    unit(v: number): number {
        return this.tileSize * v;
    }

    // Renders Visible Grid
    drawGrid(): void {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let graphicCell = new PIXI.Graphics();
                    graphicCell.lineStyle(1, 0x000000, 0.1);
                    graphicCell.drawRect(this.unit(x), this.unit(y), this.unit(1), this.unit(1));
                this.container.addChild(graphicCell);
            }
        }
    }

    // Rendered Labels for Grid Cells
    drawLabels(): void {
        const fontName = 'endigo';
        PIXI.BitmapFont.from(fontName, { fill: "#FFFFFF", fontSize: 12, fontWeight: 'bold' }, { resolution: devicePixelRatio });
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const textCoords = new PIXI.BitmapText(`${x} x ${y}`, {fontName});
                    textCoords.x = this.unit(x) + 5;
                    textCoords.y = this.unit(y) + 5;
                this.container.addChild(textCoords);
            }
        }
    }

}