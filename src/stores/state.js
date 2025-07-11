import scenes from '../data/scenes.json';

import { writable } from 'svelte/store';

// Active scene
export const currentScene = writable(scenes.start);

export function setScene(next) {
	currentScene.set = next;
}
