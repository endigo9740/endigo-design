import { GameObject } from './GameObject';
import { randomRangeDecimal } from '../utils';
import { tile } from '$lib/stores';

export class Jellyfish extends GameObject {

    private randomCosX: number = randomRangeDecimal(0.75, 1.25);
    private randomSinY: number = randomRangeDecimal(1, 1.2);

    constructor(config: any) {
        // Hardcoded
        config.animatedSpriteSettings = {
            animationSpeed: randomRangeDecimal(0.08, 0.1),
            width: 1, height: 2,
            ...config.animatedSpriteSettings
        };
        config.containerSettings = { width: 1, height: 2, ...config.containerSettings };
        // ---
        super(config);
        this.onInit();
    }
    
    onInit(): void {
        this.animatedSprite.play();
    }

    movement(elapsed: number): void {
        this.animatedSprite.x = tile.unit(1.5) + Math.cos(elapsed/tile.unit(this.randomCosX)) * tile.unit(1.5);
        this.animatedSprite.y = tile.unit(1.5) + Math.sin(elapsed/tile.unit(this.randomSinY)) * tile.unit(1.5);
    }

    render(elapsed: number): void {
        this.movement(elapsed);
    }

}