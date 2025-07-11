<script>
	// Global CSS
	import '../reset.css';
	import '../fonts.css';
	import '../app.css';

	// Data
	import scenes from '../data/scenes.json';
	import { currentScene } from '../stores/state';

	// Components
	import GameLayout from '../components/GameLayout.svelte';
	import GameView from '../components/GameView.svelte';
	import SceneImage from '../components/SceneImage.svelte';
	import SceneText from '../components/SceneText.svelte';
	import ChoicesButtons from '../components/ChoicesButtons.svelte';

	let scene = $state(scenes.start);
</script>

<GameLayout>
	<GameView>
		<SceneImage src={scenes.start.image} />

		<SceneText text={scenes.start.description_fr} />

		<ChoicesButtons scene={currentScene} />
	</GameView>
</GameLayout>
