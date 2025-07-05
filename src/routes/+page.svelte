<script>
	import '../reset.css';
	import '../app.css';

	import GameLayout from '../components/GameLayout.svelte';
	import GameView from '../components/GameView.svelte';
	import SceneImage from '../components/SceneImage.svelte';
	import SceneText from '../components/SceneText.svelte';
	import ChoicesButtons from '../components/ChoicesButtons.svelte';
</script>

<GameLayout>
	<GameView>
		<SceneImage />

		<SceneText />

		<ChoicesButtons />
	</GameView>
</GameLayout>

<style>
</style>
