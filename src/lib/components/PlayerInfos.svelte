<script>
	import { player } from '$lib/stores/player.js';

	const formattedInventory = $derived(
		Object.values(
			$player.inventory.reduce((acc, item) => {
				if (!acc[item.name]) {
					acc[item.name] = { ...item, quantity: 0 };
				}
				acc[item.name].quantity++;
				return acc;
			}, {})
		)
	);
</script>

<main>
	<div class="wrapper">
		<img class="icon heart" src="/assets/img/icons/heart.svg" alt="hearth" />
		{$player.health}
	</div>

	<div class="wrapper">
		<img class="icon coin" src="/assets/img/icons/coin.svg" alt="coin" />
		{$player.gold}
	</div>

	<div class="wrapper">Weapon: {$player.weapon.name}</div>
	<div class="items">
		Items:
		{#each formattedInventory as item}
			<!-- TODO: correctly format the items list, with commas in between words but not after the last one -->
			{item.name} x{item.quantity}
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.icon {
		width: 24px;
	}
</style>
