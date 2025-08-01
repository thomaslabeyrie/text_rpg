import { writable } from 'svelte/store';

export const player = writable({
	health: 100,
	gold: 100,
	weapon: 'Rusty Dagger',
	inventory: []

	// attack() {
	// 	//TODO
	// }
});
