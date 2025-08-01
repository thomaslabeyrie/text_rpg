import { player } from '$lib/stores/player';
import { get } from 'svelte/store';

export function syncStorage() {
	if (!localStorage.player) {
		localStorage.setItem('player', JSON.stringify(get(player)));
	} else {
		const storage = JSON.parse(localStorage.player);
		player.set(storage);
	}
}

export function updateStorage() {
	localStorage.setItem('player', JSON.stringify(get(player)));
}
