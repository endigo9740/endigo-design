import { randomFromArray } from '$lib/game/utils';

import { GameObject } from '$lib/game/objects/GameObject';
import { Bird } from '$lib/game/objects/Bird';
import { Cat } from '$lib/game/objects/Cat';
import { Fish } from '$lib/game/objects/Fish';

// Standard Game Objects ---

// Slimes
export const slimesList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critters: any[] = [
		{x: 30, y: 17},
		{x: 60, y: 33},
		{x: 80, y: 20},
	];
	critters.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Slime ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-slime.json',
				pathName: randomFromArray([
					'critter-lr-sm',
					'critter-lr-md',
					'critter-lr-lg',
				]),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1, height: 2,
				},
				containerSettings: {
					x: critter.x, y: critter.y,
					width: 1, height: 2,
				},
			})
		);
	});
	return critterArr;
};

// Crabs
export const crabsList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critterConfig: any[] = [
		{x: 33, y: 82},
		{x: 64, y: 83},
		{x: 104, y: 85},
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Crab ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-crab.json',
				pathName: randomFromArray([
					'critter-lr-sm',
					'critter-lr-md',
				]),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1,
					height: 1,
				},
				containerSettings: critter
			})
		);
	});
	return critterArr;
};

// Jellfish
export const jellyfishList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critterConfig: any[] = [
		{x: 89, y: 68},
		{x: 108, y: 67},
		{x: 112, y: 50},
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Jellyfish ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-jellyfish.json',
				pathName: 'critter-up-down',
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1, height: 2,
				},
				containerSettings: {
					x: critter.x, y: critter.y,
					width: 1, height: 2,
				}
			})
		);
	});
	return critterArr;
};

// Frogs
export const frogsList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critterConfig: any[] = [
		{x: 102, y: 114},
		{x: 70, y: 110},
		{x: 30, y: 111},
		{x: 16, y: 84},
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Frog ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-frog.json',
				pathName: randomFromArray([
					'critter-lr-sm',
					'critter-lr-md',
					'critter-lr-lg',
				]),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
				},
				containerSettings: {
					x: critter.x, y: critter.y,
				},
			})
		);
	});
	return critterArr;
};

// Unique ---

// Cats
export const catsList: any = (config: any) => {
	return [
		new Cat({
			name: 'Layla',
			loader: config.loader,
			resource: 'entities/critters/critter-layla.json',
			portrait: 'entities/critters/critter-layla-portrait.png',
			dialog: `Meow! I'm Laya the cat. I love to eat and take naps.`,
			containerSettings: {x: 58, y: 62},
			containerLevel: config.containerLevel,
			camera: config.camera,
		})
	];
}

// Fish
// TODO: rework the unique movement system
export const fishList: any = (config: any) => {
	const critterArr: Fish[] = [];
	const critterConfig: any[] = [
		{x: 8, y: 98},
		{x: 34, y: 94},
		{x: 11, y: 116},
		{x: 74, y: 103},
		{x: 114, y: 93},
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new Fish({
				name: `Fish ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-fish.json',
				containerSettings: critter
			})
		);
	});
	return critterArr;
};

// Birds
export const birdsList: any = (config: any) => {
	const critterArr: Bird[] = [];
	const critters = [
		{containerSettings: {x: 10, y: 55}, radius: 12, speed: 0.015},
		{containerSettings: {x: 15, y: 57}, radius: 9, speed: 0.02},
		{containerSettings: {x: 12, y: 60}, radius: 6, speed: 0.025},
	];
	critters.forEach((critter: any, i: number) => {
		critterArr.push(
			new Bird({
				name: `Bird ${i+1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-bird.json',
				containerSettings: critter.containerSettings,
				radius: critter.radius,
				speed: critter.speed
			})
		);
	});
	return critterArr;
};