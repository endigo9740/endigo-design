import { writable, type Writable } from 'svelte/store';

export const tile: any = {
	size: 16, // px
	zoom: 2, // matches overworld setting in Tiled export
	// Calculates a single tile unit
	unit: (v: number) => {
		return tile.size * tile.zoom * v;
	}
};

// Writables
export const cameraStore: Writable<any> = writable(undefined);
export const dialogStore: Writable<any> = writable(undefined);
export const entitiesStore: Writable<any> = writable(undefined);
