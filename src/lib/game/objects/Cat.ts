import { GameObject } from "./GameObject";

export class Cat extends GameObject {

    private containerLevel: any;
    private camera: any;
    private directionX: number = 0; // 0: default, 12: flip X

    constructor(config: any) {
        
        // Overwrite GameObject properties
        config.animatedSpriteSettings = {
            animationSpeed: 0.05,
            width: 2,
            height: 2
        };
        config.containerSettings = {
            width: 2,
            height: 2,
            ...config.containerSettings
        };
        config.interactive = true;

        // Super
        super(config);

        // Per Instance Settings
        this.containerLevel = config.containerLevel;
        this.camera = config.camera;

        // Init
        this.onInit();
    }

    onInit(): void {
        this.animatedSprite.play();
        this.containerLevel.on('pointermove', (e: any) => { this.followPointer(e); });
    }

    // Follow Pointer ---
    
    followPointer(e: any): void {
        const mousePositionX = Math.round(e.data.global.x);
        const catPositionX = this.container.position.x + this.camera.position.x;
        this.directionX = mousePositionX < catPositionX ? 0 : 12; // 0: default, 12: flip X
    }

    // Overwrite GameObject.render();
    render(): void {
        this.animatedSprite.texture.rotate = this.directionX;
    }

}