<script>
	import player from '$lib/stores/player.svelte.js';
</script>

<main>
	<div class="health">Health: {player.health}</div>
	<div class="health">Gold: {player.gold}</div>
	<div class="health">Weapon: {player.weapon}</div>
	<div class="health">
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
