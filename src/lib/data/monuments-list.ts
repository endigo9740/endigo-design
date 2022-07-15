import { works } from '$lib/data/works';
import { Monument } from '$lib/game/objects/Monument';

export const monumentsList: any = (config: any) => {
    return [
        new Monument({
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
    ];
};