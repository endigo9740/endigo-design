import { writable, type Writable } from 'svelte/store';

export const dialogStore: Writable<any> = writable(undefined);

export const pageModalStore: Writable<any> = writable(undefined);