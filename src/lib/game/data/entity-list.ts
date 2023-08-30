import { works } from '$lib/works';
import { randomFromArray } from '$lib/game/utils';

// GameObject
import { GameObject } from '$lib/game/objects/GameObject';

// Uniques
import { Bird } from '$lib/game/objects/Bird';
import { Cat } from '$lib/game/objects/Cat';
import { Fish } from '$lib/game/objects/Fish';

// Structures
import { Monument } from '$lib/game/objects/Monument';
import { Pillar } from '$lib/game/objects/Pillar';

// GameObjects ---

// NPCs
export const npcsList: any = (config: any) => {
	return [
		// Chris
		new GameObject({
			name: 'Chris',
			loader: config.loader,
			resource: 'entities/npcs/npc-chris.json',
			portrait: 'entities/npcs/npc-chris-portrait.png',
			pathName: 'npc-left-right',
			animatedSpriteSettings: { width: 2, height: 3 },
			containerSettings: { x: 51, y: 69, width: 2, height: 3 },
			dialog: `Hello, I'm Chris. Welcome to my interactive portfolio! Here you're free to explore a virtual world of my own creation. You can tap and drag to move around. Try the <strong class="text-primary-500">Stone Tablet</strong> nearby to learn more about me, or interact with any <strong class="text-primary-500">Pillar</strong> to view details about the vast array of projects I've contributed to.`,
			interactive: true
		}),

		// Melissa
		new GameObject({
			name: 'Melissa',
			loader: config.loader,
			resource: 'entities/npcs/npc-melissa.json',
			portrait: 'entities/npcs/npc-melissa-portrait.png',
			pathName: 'npc-circle',
			animatedSpriteSettings: { width: 2, height: 3 },
			containerSettings: { x: 40, y: 60, width: 2, height: 3 },
			dialog: `Hi, I'm Chris' girlfriend. I'm here to help! If you get lost, simply tap the <strong class="text-primary-500">Navigate Button</strong>. This will help you quickly and easily navigate between the available characters and projects.`,
			interactive: true
		})
	];
};

// Slimes
export const slimesList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critters: any[] = [
		{ x: 30, y: 17 },
		{ x: 60, y: 33 },
		{ x: 84, y: 20 }
	];
	critters.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Slime ${i + 1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-slime.json',
				pathName: randomFromArray(['critter-lr-sm', 'critter-lr-md', 'critter-lr-lg']),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1,
					height: 2
				},
				containerSettings: {
					x: critter.x,
					y: critter.y,
					width: 1,
					height: 2
				}
			})
		);
	});
	return critterArr;
};

// Crabs
export const crabsList: any = (config: any) => {
	const critterArr: GameObject[] = [];
	const critterConfig: any[] = [
		{ x: 33, y: 82 },
		{ x: 64, y: 83 },
		{ x: 104, y: 85 }
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Crab ${i + 1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-crab.json',
				pathName: randomFromArray(['critter-lr-sm', 'critter-lr-md']),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1,
					height: 1
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
		{ x: 89, y: 68 },
		{ x: 108, y: 65 },
		{ x: 112, y: 50 }
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Jellyfish ${i + 1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-jellyfish.json',
				pathName: randomFromArray(['critter-up-down', 'critter-circle-cw', 'critter-circle-ccw', 'critter-lr-sm']),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12]),
					width: 1,
					height: 2
				},
				containerSettings: {
					x: critter.x,
					y: critter.y,
					width: 1,
					height: 2
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
		{ x: 102, y: 114 },
		{ x: 70, y: 110 },
		{ x: 30, y: 111 },
		{ x: 16, y: 84 }
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new GameObject({
				name: `Frog ${i + 1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-frog.json',
				pathName: randomFromArray(['critter-lr-sm', 'critter-lr-md', 'critter-lr-lg']),
				animatedSpriteSettings: {
					animationSpeed: randomFromArray([0.1, 0.11, 0.12])
				},
				containerSettings: {
					x: critter.x,
					y: critter.y
				}
			})
		);
	});
	return critterArr;
};

// Uniques ---
// There override the default behavior or settings of the standard GameObject

// Cats
// Follows mouse position left/right
export const catsList: any = (config: any) => {
	return [
		new Cat({
			name: 'Layla',
			loader: config.loader,
			resource: 'entities/critters/critter-layla.json',
			portrait: 'entities/critters/critter-layla-portrait.png',
			dialog: `Meow! I'm Layla the cat. Chris and Melissa are my humans. Try the <strong class="text-primary-500">♫ Button</strong> to hear some chill tunes while you explore this world.`,
			containerSettings: { x: 58, y: 62 },
			containerLevel: config.containerLevel,
			camera: config.camera
		})
	];
};

// Fish
// Moves in a figure 8-like path
// TODO: rework the unique movement system
export const fishList: any = (config: any) => {
	const critterArr: Fish[] = [];
	const critterConfig: any[] = [
		{ x: 8, y: 98 },
		{ x: 34, y: 94 },
		{ x: 11, y: 116 },
		{ x: 74, y: 103 },
		{ x: 114, y: 93 }
	];
	critterConfig.forEach((critter: any, i: number) => {
		critterArr.push(
			new Fish({
				name: `Fish ${i + 1}`,
				loader: config.loader,
				resource: 'entities/critters/critter-fish.json',
				containerSettings: critter
			})
		);
	});
	return critterArr;
};

// Birds
// Circle a the container anchor point, with a defined radius offset
export const birdsList: any = (config: any) => {
	const critterArr: Bird[] = [];
	const critters = [
		// Trio
		{ containerSettings: { x: 10, y: 55 }, radius: 12, speed: 0.015 },
		{ containerSettings: { x: 15, y: 57 }, radius: 9, speed: 0.02 },
		{ containerSettings: { x: 12, y: 60 }, radius: 6, speed: 0.025 },
		// Individual
		{ containerSettings: { x: 91, y: 45 }, radius: 9, speed: 0.02 },
		{ containerSettings: { x: 89, y: 42 }, radius: 6, speed: 0.025 }
	];
	critters.forEach((critter: any, i: number) => {
		critterArr.push(
			new Bird({
				name: `Bird ${i + 1}`,
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

// Structures ---

// Monuments
export const monumentsList: any = (config: any) => {
	return [
		new Monument(
			{
				loader: config.loader,
				containerSettings: { x: 49, y: 59 }
			},
			config.modalStore
		)
	];
};

export const pillarsList: any = (config: any) => {
	const pillarArr: any[] = [];

	// Constrct one pillar per work
	Object.entries(works).forEach((category: any) => {
		const [categoryKey, categoryDetails] = category;
		categoryDetails.projects.forEach((project: any) => {
			if (!project.coords) {
				console.error(`${project.name} is missing coordinates.`);
				return;
			}
			pillarArr.push(
				new Pillar(
					{
						name: project.name,
						loader: config.loader,
						containerSettings: {
							x: project.coords.x,
							y: project.coords.y
						},
						page: {
							component: 'Work',
							category: categoryKey,
							id: project.id
						}
					},
					config.modalStore
				)
			);
		});
	});

	return pillarArr;
};
