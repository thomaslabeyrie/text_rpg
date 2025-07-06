<script>
</script>

<main class="view">
	<slot />
</main>

<style>
	.view {
		height: 90vh;
		width: 60vw;

		/* border: 1px solid var(--text); */

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
</style>
