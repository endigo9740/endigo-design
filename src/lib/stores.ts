import { writable, type Writable } from 'svelte/store';

export const tile: any = {
    size: 16, // px
    zoom: 3, // matches overworld setting in Tiled export
    // Calculates a single tile unit
    unit: (v: number) => { return (tile.size * tile.zoom) * v; }
};

// Writables
export const dialogStore: Writable<any> = writable(undefined);
export const pageModalStore: Writable<any> = writable(undefined);
export const menuStore: Writable<boolean> = writable(false);