<script>
	import { player } from '$lib/stores/player.svelte.js';
</script>

<main>
	<div class="health">Health: {player.health}</div>
	<div class="gold">Gold: {player.gold}</div>
	<div class="weapon">Weapon: {player.weapon}</div>
	<div class="items">
		Items: {player.inventory.join(', ')}
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
</style>
