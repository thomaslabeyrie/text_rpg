<script>
	import { player } from '$lib/stores/player';
	import shop from '../../data/shop.json';
	import { shopItems } from '$lib/stores/shop.svelte.js';
	import { updateStorage } from '../../data/indexedDB';

	const { currentScene, updateCurrentScene } = $props();

	function purchaseItem(item) {
		if ($player.gold >= item.value) {
			$player.inventory.push(item.name);
			$player.gold -= item.value;

			updateStorage();
		} else {
			console.log('not enough gold');
		}
	}
</script>

<main class="choices-container">
	<ol>
		{#if currentScene.id === 'shop'}
			{#each shopItems as item}
				<li>
					<button onclick={() => purchaseItem(item)}>
						BUY {item.name.toUpperCase()} ({item.value} GOLD)
					</button>
				</li>
			{/each}
		{/if}
		{#each currentScene.choices as choice}
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
