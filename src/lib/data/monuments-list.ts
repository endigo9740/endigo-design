import { Monument } from '$lib/game/objects/Monument';

export const monumentsList: any = (config: any) => {
    return [
        new Monument({
            loader: config.loader,
            containerSettings: { x: 49, y: 59, }
        })
    ];
};