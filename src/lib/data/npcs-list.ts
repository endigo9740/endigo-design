import { GameObject } from "$lib/game/objects/GameObject";

export const npcsList: any = (config: any) => {
    return [

        // Chris
        new GameObject({
            name: 'Chris',
            loader: config.loader,
            resource: 'entities/npcs/npc-chris.json',
            portrait: 'entities/npcs/npc-chris-portrait.png',
            pathName: 'npc-left-right',
            animatedSpriteSettings: { width: 2, height: 3 },
            containerSettings: { x: 51, y: 69, width: 2, height: 3 },
            dialog: `Hello, I'm Chris. Welcome to my interactive portfolio world! Have a look around. Each pillar represents a project I've contributed to:illar you discover will begin flashing. You may also tap the tablet near me to learn my story or get in touch.`,
            interactive: true
        }),

        // Melissa
        new GameObject({
            name: 'Melissa',
            loader: config.loader,
            resource: 'entities/npcs/npc-melissa.json',
            portrait: 'entities/npcs/npc-melissa-portrait.png',
            pathName: 'npc-circle',
            animatedSpriteSettings: { width: 2, height: 3 },
            containerSettings: { x: 40, y: 60, width: 2, height: 3 },
            dialog: `Hi, I'm Chris' girlfriend. I'm here to help! Tap the <strong>NAVIGATE</strong> button on your screen if you get lost. It will help you navigate the world. You can also tap the <strong>♫</strong> button to listen to listen to some relaxing jams.`,
            interactive: true
        }),
        
    ]
};