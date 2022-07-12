import { GameObject } from './GameObject';
import { randomRangeDecimal } from '../utils';
import { tile } from '$lib/stores';

export class Slime extends GameObject {

    private randomCosX: number = randomRangeDecimal(0.5, 1);
    private lastPosX: number = 0;

    constructor(config: any) {
        // Hardcoded
        config.animatedSpriteSettings = {
            animationSpeed: randomRangeDecimal(0.15, 0.25),
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
        this.lastPosX >= this.animatedSprite.x ? this.mirrorSpriteOnX(-1) : this.mirrorSpriteOnX(1);
        this.lastPosX = this.animatedSprite.x;
    }

    mirrorSpriteOnX(newScale: number): void {
        if (this.animatedSprite.scale.x !== newScale) {
            this.animatedSprite.scale.x = newScale * 3; // why 3?
        }
    }

    render(elapsed: number): void {
        this.movement(elapsed);
    }

}