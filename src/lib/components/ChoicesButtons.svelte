<script>
	import player from '$lib/stores/player.svelte';
	import shop from '../../data/shop.json';

	const { choices, updateCurrentScene } = $props();

	function purchaseItem(item) {
		if (player.gold >= item.value) {
			player.inventory.push(item.name);
			player.gold -= item.value;
		} else {
			console.log('not enough gold');
		}
	}
</script>

<main class="choices-container">
	<ol>
		{#each choices as choice}
			{#if choice.action}
				<li>
					<button onclick={() => purchaseItem(shop[choice.text])}>
						BUY {choice.text.toUpperCase()}
					</button>
				</li>
			{/if}

			{#if choice.next}
				<li>
					<button onclick={() => updateCurrentScene(choice.next)}>
						{choice.text.toUpperCase()}
					</button>
				</li>
			{/if}
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
		}

		li:hover {
			color: var(--text-hovered);
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
