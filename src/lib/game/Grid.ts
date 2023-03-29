import * as PIXI from 'pixi.js';
import { tile } from '$lib/game/stores';

export class Grid {
	private container: any;
	private texture: any;
	public enabled: boolean = false;
	public coords: boolean = false;

	constructor(config: any) {
		this.container = config.container || null;
		this.texture = config.texture || null;
		this.enabled = config.enabled || false;
		this.coords = config.coords || false;
		// Generate Custom Bitmap Font
		PIXI.BitmapFont.from('EndigoFont', { fill: '#FFFFFF', fontSize: 10, fontWeight: 'bold' });
		// Init
		this.onInit();
	}

	onInit(): void {
		if (this.enabled) {
			this.renderGrid();
		}
		if (this.coords) {
			this.renderCoords();
		}
	}

	// Renders a visible grid at the exact tile unit size
	// TODO: repalce with graphic->texture using http://pixijs.download/dev/docs/PIXI.Extract.html
	renderGrid(): void {
		const tilingCell = new PIXI.TilingSprite(this.texture, this.container.width, this.container.height);
		tilingCell.alpha = 0.25;
		this.container.addChild(tilingCell);
	}

	// Rendered text coordinates for each grid unit, ex: (x,y)
	renderCoords(): void {
		const worldWidth = this.container.width / tile.unit(1);
		const worldHeight = this.container.height / tile.unit(1);
		for (let y = 0; y < worldHeight; y++) {
			for (let x = 0; x < worldWidth; x++) {
				const textCoords = new PIXI.BitmapText(`${x} x ${y}`, { fontName: 'EndigoFont' });
				textCoords.x = tile.unit(x + 0.5);
				textCoords.y = tile.unit(y + 0.5);
				textCoords.anchor.x = 0.5;
				textCoords.anchor.y = 0.5;
				this.container.addChild(textCoords);
			}
		}
	}
}
