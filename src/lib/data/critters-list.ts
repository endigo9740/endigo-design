import { Bird } from '$lib/game/objects/Bird';

// Birds
const birdCoords = [
	{x: 50, y: 63},
];
export const birdsList: any = (config: any) => {
	const birdsArr: Bird[] = [];
	birdCoords.forEach((xyCoords: any, i: number) => {
		birdsArr.push(
			new Bird({
				name: `Bird ${i+1}`,
				loader: config.loader,
				resource: 'critter-bird.json',
				containerSettings: xyCoords
			})
		);
	});
	return birdsArr;
};
