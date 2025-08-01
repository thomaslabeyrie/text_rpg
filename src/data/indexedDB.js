import { player } from '$lib/stores/player.js';
import { get } from 'svelte/store';

export function syncDB() {
	if (!localStorage.player) {
		// init local storage from player store
		localStorage.setItem('player', JSON.stringify(get(player)));
	} else {
		// init player store from local storage
		const storage = JSON.parse(localStorage.player);
		player.set(storage);
	}

	// mirrors the changes in local storage everytime the store is updated
	player.subscribe((updated) => {
		// console.log(updated);
		localStorage.setItem('player', JSON.stringify(updated));
	});
}
