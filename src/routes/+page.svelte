<script>
	// Global CSS
	import '../reset.css';
	import '../fonts.css';
	import '../app.css';

	// Data

	import scenes from '../data/scenes.json';
	import { player } from '$lib/stores/player.js';

	// Components
	import SceneImage from '$lib/components/SceneImage.svelte';
	import SceneText from '$lib/components/SceneText.svelte';
	import ChoicesButtons from '$lib/components/ChoicesButtons.svelte';
	import PlayerInfos from '$lib/components/PlayerInfos.svelte';
	import { onMount } from 'svelte';
	import { syncStorage } from '../data/indexedDB';

	let currentSceneId = 'start';
	let currentScene = $state(scenes[currentSceneId]);

	function updateCurrentScene(id) {
		currentScene = scenes[id];
	}

	$inspect(currentScene.id);

	onMount(() => {
		syncStorage();
	});
</script>

<SceneImage src={currentScene.image} />

<SceneText text={currentScene.description_en} />

<ChoicesButtons {currentScene} {updateCurrentScene} />

<PlayerInfos />
