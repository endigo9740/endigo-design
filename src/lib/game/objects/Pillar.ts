import { GameObject } from './GameObject';
import { pageModalStore } from '$lib/stores';

export class Pillar extends GameObject {

    public found: boolean = false;
    public page: any;

    constructor(config: any) {
        
        // Overwrite GameObject properties
        config.resource = 'entities/pillar.json';
        config.animatedSpriteSettings = {
            animationSpeed: 0.4,
            width: 3,
            height: 6,
            ...config.animatedSpriteSettings
        };
        config.containerSettings = {
            width: 3,
            height: 6,
            ...config.containerSettings
        };
        config.interactive = true;

        // Super
        super(config);

        // Per Instance Settings
        this.page = config.page;
    }

    // Overwrite GameObject.onPointerDown()
    onPointerDown(): void {
        this.found = true;
        pageModalStore.set(this.page);
        this.animatedSprite.play();
    }

}
