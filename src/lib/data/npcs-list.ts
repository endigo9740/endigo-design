import { Npc } from "../game/objects/Npc";

export const npcsList: any = (config: any) => {
    return [

        // Chris
        new Npc({
            name: 'Chris',
            loader: config.loader,
            resource: 'npc-chris.json',
            containerSettings: {
                x: 51,
                y: 69
            },
            portrait: 'npc-chris-portrait.png',
            dialog: `Hello, I'm the Chris. Welcome to my interactive portfolio gallery! Have a look around. Each pillar represents a project I've contributed to. Once activated you'll see the pillar animate and come to life. Try the pillar just north of me to learn who I am and what I do.`,
            path: 'left-right',
        }),

        // Melissa
        new Npc({
            name: 'Melissa',
            loader: config.loader,
            resource: 'npc-melissa.json',
            containerSettings: {
                x: 40,
                y: 60
            },
            portrait: 'npc-melissa-portrait.png',
            dialog: `Hi, I'm Chris' girlfriend. I'm here to help! Tap the <strong>MENU</strong> button at the bottom left if you get lost, or hit the <strong>♫</strong> button to listen to some some relaxing jams.`,
            path: 'circle'
        }),

        // ...

    ]
};