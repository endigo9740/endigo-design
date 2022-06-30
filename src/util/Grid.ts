// Grid Handler
import * as PIXI from 'pixi.js';

export class Grid {
    public enabled: boolean = true;
    public labeled: boolean = true;

    public tileSize: number = 32 * 2; // px/zoom
    public width: number = 64; // tiles
    public height: number = 32; // tiles

    public container: any;
    
    constructor(config: any) {
        this.container = config.container;
    }

    // Provides Grid Unit
    unit(v: number): number {
        return this.tileSize * v;
    }

    // Renders Visible Grid
    drawGrid(): void {
        if (this.enabled) {
            // Loop
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    // Set
                    let graphicCell = new PIXI.Graphics();
                        graphicCell.lineStyle(1, 0xCCCCCC, 0.05);
                        graphicCell.drawRect(this.unit(x), this.unit(y), this.unit(1), this.unit(1));
                    this.container.addChild(graphicCell);
                }
            }
        }
    }

    // Rendered Labels for Grid Cells
    drawLabels(): void {
        const fontName = 'endigo';
        PIXI.BitmapFont.from(fontName, { fill: "#333333", fontSize: 8, fontWeight: 'bold' }, { resolution: devicePixelRatio });
        if (this.labeled) {
            // Loop
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    // Set
                    const textCoords = new PIXI.BitmapText(`${x} x ${y}`, {fontName});
                        textCoords.x = this.unit(x) + 5;
                        textCoords.y = this.unit(y) + 5;
                    this.container.addChild(textCoords);
                }
            }
        }
    }

}