import { Bird } from '$lib/game/objects/Bird';

export const birdsList: any = (config: any) => {
	return [
		new Bird({
			name: 'Bird 1',
			loader: config.loader,
			resource: 'critter-bird.json',
			containerSettings: {
				x: 50,
				y: 63
			}
		})
	];
};
