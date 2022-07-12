import { Bird } from '$lib/game/objects/Bird';
import { Slime } from '$lib/game/objects/Slime';

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

// Slimes
// Birds
const slimeCoords = [
	{x: 55, y: 68},
	{x: 55, y: 69},
	{x: 55, y: 70},
];
export const slimesList: any = (config: any) => {
	const slimeArr: Slime[] = [];
	slimeCoords.forEach((xyCoords: any, i: number) => {
		slimeArr.push(
			new Slime({
				name: `Slime ${i+1}`,
				loader: config.loader,
				resource: 'critter-slime.json',
				containerSettings: xyCoords
			})
		);
	});
	return slimeArr;
};