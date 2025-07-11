<script>
</script>

<main class="view">
	<slot />
</main>

<style>
	.view {
		height: 95vh;
		width: 60vw;

		/* border: 1px solid var(--text-inactive); */

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 2rem;
	}
</style>
