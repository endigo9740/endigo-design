import { GameObject } from './GameObject';
import { randomRangeDecimal } from '../utils';
import { tile } from '$lib/game/stores';

export class Fish extends GameObject {
	private randomCosX: number = randomRangeDecimal(0.75, 1.25);
	private randomSinY: number = randomRangeDecimal(1, 1.2);
	private lastPosX: number = 0;

	constructor(config: any) {
		// Overwrite GameObject properties
		config.animatedSpriteSettings = {
			animationSpeed: randomRangeDecimal(0.12, 0.14),
			width: 1,
			height: 2
		};
		config.containerSettings = {
			width: 1,
			height: 2,
			...config.containerSettings
		};

		// Super
		super(config);

		// Play Animation Immediately
		this.animatedSprite.play();
	}

	movement(elapsed: number): void {
		this.animatedSprite.x = tile.unit(1.5) + Math.cos(elapsed / tile.unit(this.randomCosX)) * tile.unit(1.5);
		this.animatedSprite.y = tile.unit(1.5) + Math.sin(elapsed / tile.unit(this.randomSinY)) * tile.unit(1.5);
		this.lastPosX >= this.animatedSprite.x ? this.mirrorSpriteOnX(-1) : this.mirrorSpriteOnX(1);
		this.lastPosX = this.animatedSprite.x;
	}

	mirrorSpriteOnX(newScale: number): void {
		if (this.animatedSprite.scale.x !== newScale) {
			const amount = this.animatedSprite.width / tile.unit(1);
			this.animatedSprite.scale.x = newScale * 3; // why 3?
		}
	}

	render(elapsed: number): void {
		if (elapsed && Math.floor(elapsed) % 2 === 0) {
			return;
		}
		this.movement(elapsed);
	}
}
