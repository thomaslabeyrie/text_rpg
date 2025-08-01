<script>
	import { player } from '$lib/stores/player';
	import { shopItems } from '$lib/stores/shop.svelte.js';
	import shop from '../../data/shop.json';

	const { currentScene, updateCurrentScene } = $props();

	function purchaseItem(item) {
		if ($player.gold >= item.value) {
			if (item.type === 'weapon') {
				$player.weapon = item;
			} else {
				$player.inventory.push(item);
			}
			$player.gold -= item.value;
		} else {
			// TODO: display an error in UI
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
						Buy {item.name} ({item.value} G)
					</button>
				</li>
			{/each}
		{/if}
		{#each currentScene.choices as choice}
			{#if choice.next}
				<li>
					<button onclick={() => updateCurrentScene(choice.next)}>
						{choice.text}
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
