import * as PIXI from 'pixi.js';

export class World {
    public texture: any;
    public sprite: any;

    private container: any;

    constructor(config: any) {
        this.container = config.container;
        this.texture = config.texture;
    }

    generate(): void {
        this.sprite = PIXI.Sprite.from(this.texture);
            this.sprite.width = this.sprite.width;
            this.sprite.height = this.sprite.height;
        this.container.addChild(this.sprite);
    }

}