<script>
	// Global CSS
	import '../reset.css';
	import '../app.css';

	// Data
	import quest from '../data/quest.json';

	// Components
	import GameLayout from '../components/GameLayout.svelte';
	import GameView from '../components/GameView.svelte';
	import SceneImage from '../components/SceneImage.svelte';
	import SceneText from '../components/SceneText.svelte';
	import ChoicesButtons from '../components/ChoicesButtons.svelte';
</script>

<GameLayout>
	<GameView>
		<SceneImage src={quest.start.image} />

		<SceneText text={quest.start.description} />

		<ChoicesButtons />
	</GameView>
</GameLayout>

<style>
</style>
