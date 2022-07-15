import { GameObject } from './GameObject';
import { randomRangeDecimal } from '../utils';
import { tile } from '$lib/stores';

export class Frog extends GameObject {

    private randomCosX: number = randomRangeDecimal(0.75, 1.25);
    private lastPosX: number = 0;

    constructor(config: any) {
        // Hardcoded
        config.animatedSpriteSettings = {
            animationSpeed: randomRangeDecimal(0.15, 0.17),
            ...config.animatedSpriteSettings
        };
        config.containerSettings = { ...config.containerSettings };
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
            const amount = this.animatedSprite.width / tile.unit(1);
            this.animatedSprite.scale.x = newScale * 3; // why 3?
        }
    }

    render(elapsed: number): void {
        this.movement(elapsed);
    }

}