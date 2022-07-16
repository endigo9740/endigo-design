import { Npc } from "../game/objects/Npc";

export const npcsList: any = (config: any) => {
    return [

        // Chris
        new Npc({
            name: 'Chris',
            loader: config.loader,
            resource: 'entities/npcs/npc-chris.json',
            containerSettings: {
                x: 51,
                y: 69
            },
            portrait: 'entities/npcs/npc-chris-portrait.png',
            dialog: `Hello, I'm Chris. Welcome to my interactive portfolio world! Have a look around. Each pillar represents a project I've contributed to. Any pillar you discover will begin flashing. You may also tap the tablet near me to learn my story or get in touch.`,
            path: 'left-right',
        }),

        // Melissa
        new Npc({
            name: 'Melissa',
            loader: config.loader,
            resource: 'entities/npcs/npc-melissa.json',
            containerSettings: {
                x: 40,
                y: 60
            },
            portrait: 'entities/npcs/npc-melissa-portrait.png',
            dialog: `Hi, I'm Chris' girlfriend. I'm here to help! Tap the <strong>NAVIGATE</strong> button on your screen if you get lost. It will help you navigate the world. You can also tap the <strong>♫</strong> button to listen to listen to some relaxing jams.`,
            path: 'circle'
        }),

        // ...

    ]
};