import { works } from '$lib/data/works';
import { Pillar } from '$lib/game/objects/Pillar';

export const generatePillars: any = (config: any) => {
    const resourceName: string = 'pillar.json';

    // Create array and populate about page pillar
    const pillarArr: Pillar[] = [
        new Pillar({
            name: 'About Chris',
            containerLevel: config.containerLevel,
            camera: config.camera,
            animSprite: config.spriteHandler.animSpriteSheet(resourceName),
            x: 49, y: 59,
            page: { component: 'About', category: '', id: '' }
        })
    ];

    // Add one pillar per project, based on provided coords
    Object.entries(works).forEach((category: any) => {
        const [categoryKey, categoryDetails] = category;
        categoryDetails.projects.forEach((project: any) => {
            if (!project.coords) return;
            pillarArr.push(
                new Pillar({
                    name: project.name,
                    containerLevel: config.containerLevel,
                    camera: config.camera,
                    animSprite: config.spriteHandler.animSpriteSheet(resourceName),
                    x: project.coords.x, y: project.coords.y,
                    page: { component: 'Work', category: categoryKey, id: project.id }
                }),
            );
        });
    });

    return pillarArr;
};