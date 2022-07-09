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
            dialog: `Hello, I'm the Chris. Welcome to my interactive portfolio gallery! Have a look around. Each pillar represents a project I've contributed to. Once activated you'll see the pillar animate and come to life. Try the pillar just north of me to learn who I am and what I do.`,
        }),
        new Npc({
            name: 'Melissa',
            containerLevel: config.containerLevel,
            camera: config.camera,
            portrait: 'npc-melissa-portrait.png',
            animSprite: config.spriteHandler.animSpriteSheet('npc-melissa.json'),
            x: 65, y: 73,
            pathing: 'circle',
            dialog: `Hi, I'm Chris' girlfriend. I'm here to help! Tap the <strong>MENU</strong> button at the bottom left if you get lost, or hit the <strong>♫</strong> button to listen to some some relaxing jams.`,
        }),
    ]
};