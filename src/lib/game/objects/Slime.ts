import { GameObject } from '$lib/game/objects/GameObject';
import { randomFromArray } from '$lib/game/utils';
import { tile } from '$lib/stores';

export class Slime extends GameObject {

    private randomCosX: number = randomFromArray([0.75, 1]);
    private lastPosX: number = 0;

    constructor(config: any) {
        // Hardcoded
        config.animatedSpriteSettings = {
            animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
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
        this.lastPosX >= this.animatedSprite.x ? this.mirrorX(12) : this.mirrorX(0); // 0: default, 12: flip X
        this.lastPosX = this.animatedSprite.x;
    }

    mirrorX(val: number): void {
        if (this.animatedSprite.texture.rotate !== val) {
            this.animatedSprite.texture.rotate = val
        }
    }

    render(elapsed: number): void {
        this.movement(elapsed);
    }

}