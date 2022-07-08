import { Npc } from "../game/objects/Npc";

export const generateNpcs: any = (config: any) => {
    return [
        new Npc({
            name: 'Chris',
            containerLevel: config.containerLevel,
            camera: config.camera,
            portrait: 'portrait.png',
            animSprite: config.spriteHandler.animSpriteSheet('npc-chris.json'),
            x: 64, y: 68,
            pathing: 'left-right',
            dialog: `Hello, I'm the Chris. Welcome to my interactive portfolio gallery! Have a look around. Each pillar features information about me or one of my projects. Once activated you'll see the pillar come to life. Try the one just north of me to get started! You goal is to find all pillars. Good luck!`,
        }),
        new Npc({
            name: 'Melissa',
            containerLevel: config.containerLevel,
            camera: config.camera,
            portrait: 'npc-melissa-portrait.png',
            animSprite: config.spriteHandler.animSpriteSheet('npc-melissa.json'),
            x: 65, y: 73,
            pathing: 'circle',
            dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
        }),
    ]
};