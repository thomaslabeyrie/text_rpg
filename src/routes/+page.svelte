<script>
	// Global CSS
	import '../reset.css';
	import '../fonts.css';
	import '../app.css';

	// Data
	import scenes from '../data/scenes.json';

	import player from '$lib/stores/player.svelte.js';

	// Components
	import SceneImage from '$lib/components/SceneImage.svelte';
	import SceneText from '$lib/components/SceneText.svelte';
	import ChoicesButtons from '$lib/components/ChoicesButtons.svelte';
	import TradeWindow from '$lib/components/TradeWindow.svelte';
	import PlayerInfos from '$lib/components/PlayerInfos.svelte';

	let currentSceneId = 'start';
	let currentScene = scenes[currentSceneId];

	console.log(`current scene: ${currentScene.id}`);

	function updateCurrentScene(id) {
		currentScene = scenes[id];
	}
</script>

<SceneImage src={currentScene.image} />

<SceneText text={currentScene.description_en} />

<ChoicesButtons choices={currentScene.choices} {updateCurrentScene} />

<PlayerInfos />

<style>
</style>
