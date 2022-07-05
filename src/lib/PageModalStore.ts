import { writable, type Writable } from 'svelte/store';

export const pageModalStore: Writable<any> = writable(undefined);