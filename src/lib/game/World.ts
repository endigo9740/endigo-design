import * as PIXI from 'pixi.js';

export class World {
    public texture: any;
    public sprite: any;

    constructor(config: any) {
        this.texture = config.texture;
        this.onInit();
    }

    onInit(): void {
        this.sprite = PIXI.Sprite.from(this.texture);
            this.sprite.width = this.sprite.width;
            this.sprite.height = this.sprite.height;
    }

}