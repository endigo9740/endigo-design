import { tile } from '$lib/game/stores';
import { GameObject } from './GameObject';

export class Bird extends GameObject {
	public radius: number;
	public speed: number;

	constructor(config: any) {
		super(config);
		this.radius = config.radius || 12;
		this.speed = config.speed || 0.015;
		this.onInit();
	}

	onInit(): void {
		// Adjust Pivot Point
		this.container.pivot.x = tile.unit(0.5);
		this.container.pivot.y = tile.unit(0.5);
		// Extend circle radius
		this.animatedSprite.x += tile.unit(this.radius);
		// Play animation immediately
		this.animatedSprite.play();
	}

	// Overwrite GameObject.render()
	render(): void {
		this.container.rotation += this.speed;
	}
}
