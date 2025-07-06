<script>
	import quest from '../data/quest.json';
</script>

<main class="choices-container">
	<ol>
		{#each quest.start.choices as choice}
			<li><button>{choice.text.toUpperCase()}</button></li>
		{/each}
	</ol>
</main>

<style>
	.choices-container {
		width: 100%;

		display: flex;
		justify-content: space-around;
		align-items: center;

		ol {
			list-style: decimal;
		}

		li {
			margin: 0.25rem 0;
			color: var(--text-inactive);
		}

		li:hover {
			color: var(--text);
		}

		button {
			font-family: inherit;
			font-size: 1.5rem;
			color: inherit;

			background-color: transparent;

			/* border: 1px solid var(--text); */
			border: none;
			cursor: pointer;
		}
	}
</style>
