// https://pixijs.download/dev/docs/PIXI.AnimatedSprite.html

import * as PIXI from 'pixi.js';

export class SpriteHandler {
    private loader: any;

    constructor(config: any) {
        this.loader = config.loader;
    }
    
    animSpriteSheet(resourceName: string): PIXI.AnimatedSprite {
        let sheet: any[] = this.loader.resources[resourceName].spritesheet.textures;
        return new PIXI.AnimatedSprite(Object.values(sheet));
    }

}
