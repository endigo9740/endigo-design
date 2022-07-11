import { Bird } from "$lib/game/objects/Bird";

export const generateBirds: any = (config: any) => {
    return [
        new Bird({
            name: 'Bird 1',
            containerLevel: config.containerLevel,
            camera: config.camera,
            animSprite: config.spriteHandler.animSpriteSheet('critter-bird.json'),
            x: 50, y: 63
        }),
    ];
}