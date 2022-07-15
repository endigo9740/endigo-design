import { Bird } from '$lib/game/objects/Bird';
import { Slime } from '$lib/game/objects/Slime';
import { Cat } from '$lib/game/objects/Cat';
import { Crab } from '$lib/game/objects/Crab';
import { Jellyfish } from '$lib/game/objects/Jellyfish';

// Birds
const birdConfigs = [
	{containerSettings: {x: 10, y: 55}, radius: 12, speed: 0.015},
	{containerSettings: {x: 15, y: 57}, radius: 9, speed: 0.02},
	{containerSettings: {x: 12, y: 60}, radius: 6, speed: 0.025},
];
export const birdsList: any = (config: any) => {
	const birdsArr: Bird[] = [];
	birdConfigs.forEach((birdConfig: any, i: number) => {
		birdsArr.push(
			new Bird({
				name: `Bird ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-bird.json',
				containerSettings: birdConfig.containerSettings,
				radius: birdConfig.radius,
				speed: birdConfig.speed
			})
		);
	});
	return birdsArr;
};

// Slimes
const slimesCoords = [
	{x: 30, y: 17},
	{x: 60, y: 33},
	{x: 80, y: 20},
];
export const slimesList: any = (config: any) => {
	const slimesArr: Slime[] = [];
	slimesCoords.forEach((xyCoords: any, i: number) => {
		slimesArr.push(
			new Slime({
				name: `Slime ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-slime.json',
				containerSettings: xyCoords
			})
		);
	});
	return slimesArr;
};

// Cats
export const catsList: any = (config: any) => {
	return [
		new Cat({
			name: 'Layla',
			loader: config.loader,
			resource: 'entities/critters/critter-layla.json',
			portrait: 'entities/critters/critter-layla-portrait.png',
			dialog: `Meow! I'm Layla and I'm sleepy. I might take a nap soon.`,
			containerSettings: {x: 58, y: 63},
			containerLevel: config.containerLevel,
			camera: config.camera,
		})
	];
}

// Crabs
const crabsCoords = [
	{x: 33, y: 82},
	{x: 64, y: 83},
	{x: 104, y: 85},
];
export const crabsList: any = (config: any) => {
	const crabsArr: Crab[] = [];
	crabsCoords.forEach((xyCoords: any, i: number) => {
		crabsArr.push(
			new Crab({
				name: `Crab ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-crab.json',
				containerSettings: xyCoords
			})
		);
	});
	return crabsArr;
};

// Jellfish
const jellyfishCoords = [
	{x: 89, y: 68},
	{x: 108, y: 62},
	{x: 117, y: 46},
];
export const jellyfishList: any = (config: any) => {
	const jellyfishArr: Jellyfish[] = [];
	jellyfishCoords.forEach((xyCoords: any, i: number) => {
		jellyfishArr.push(
			new Jellyfish({
				name: `Jellyfish ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-jellyfish.json',
				containerSettings: xyCoords
			})
		);
	});
	return jellyfishArr;
};