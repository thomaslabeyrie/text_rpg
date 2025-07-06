<script>
	import quest from '../data/quest.json';
</script>

<main class="choices-container">
	{#each quest.start.choices as choice}
		<button>{choice.text.toUpperCase()}</button>
	{/each}
</main>

<style>
	.choices-container {
		width: 100%;

		display: flex;
		justify-content: space-around;
		align-items: center;

		button {
			font-family: inherit;
			font-size: 1.5rem;
			color: var(--text);

			padding: 0.5rem 1rem;

			background-color: transparent;

			/* border: 1px solid var(--text); */
			border: none;
		}
	}
</style>
