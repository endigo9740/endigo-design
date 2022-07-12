import * as PIXI from 'pixi.js';

export class World {
    public static instance: World;

    public texture: any;
    public sprite: any;

    private container: any;

    constructor(config: any) {
        this.container = config.container;
        this.texture = config.texture;
        // Init
        this.onInit();
    }

    public static getInstance(config: any): World {
        if (!World.instance) { World.instance = new World(config); }
        return World.instance;
    }

    onInit(): void {
        this.sprite = PIXI.Sprite.from(this.texture);
            this.sprite.width = this.sprite.width;
            this.sprite.height = this.sprite.height;
    }

}