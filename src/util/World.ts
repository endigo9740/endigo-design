import * as PIXI from 'pixi.js';

export class World {
    public container: any;
    public imageSrc: string = '';
    private sprite: any;

    constructor(config: any) {
        this.container = config.container;
        this.imageSrc = config.imageSrc || 'overworld.png';
    }

    generate(): void {
        this.sprite = PIXI.Sprite.from(this.imageSrc);
        this.container.addChild(this.sprite);
    }

}