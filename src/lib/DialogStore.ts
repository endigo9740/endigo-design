import { writable, type Writable } from 'svelte/store';

export const dialogStore: Writable<any> = writable(undefined);