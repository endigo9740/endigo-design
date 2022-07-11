import { works } from '$lib/data/works';
import { Pillar } from '$lib/game/objects/Pillar';

export const pillarsList: any = (config: any) => {
    const pillarArr: Pillar[] = [
        // ********************
        new Pillar({
            name: 'About Chris',
            loader: config.loader,
            containerSettings: {
                x: 49,
                y: 59,
            },
            page: {
                component: 'About',
                category: '',
                id: ''
            }
        })
        // ********************
    ];

    // Constrct one pillar per work
    Object.entries(works).forEach((category: any) => {
        const [categoryKey, categoryDetails] = category;
        categoryDetails.projects.forEach((project: any) => {
            if (!project.coords) { console.error(`${project.name} is missing coordinates.`); return; };
            pillarArr.push(
                new Pillar({
                    name: project.name,
                    loader: config.loader,
                    containerSettings: {
                        x: project.coords.x,
                        y: project.coords.y,
                    },
                    page: {
                        category: categoryKey,
                        id: project.id
                    }
                }),
            );
        });
    });

    return pillarArr;
};