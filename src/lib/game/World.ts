import * as PIXI from 'pixi.js';
import { tile } from '$lib/game/stores';

export class World {
	public texture: any;
	public sprite: any;

	constructor(config: any) {
		this.texture = config.texture;
		this.onInit();
	}

	onInit(): void {
		this.sprite = PIXI.Sprite.from(this.texture);
		this.sprite.width = this.sprite.width * tile.zoom;
		this.sprite.height = this.sprite.height * tile.zoom;
	}
}
