import { GameObject } from './GameObject';
import { pageModalStore } from '$lib/stores';

export class Monument extends GameObject {

    constructor(config: any) {

        // Overwrite GameObject properties
        config.resource = 'About Chris';
        config.resource = 'entities/monument.json';
        config.animatedSpriteSettings = { 
            animationSpeed: 0.05, 
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
    }

    // Overwrite GameObject.onPointerDown()
    onPointerDown(): void {
        pageModalStore.set({ component: 'About', category: null, id: null });
        this.animatedSprite.gotoAndStop(1);
    }

}
