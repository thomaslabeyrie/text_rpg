<script>
</script>

<main class="view">
	<slot />
</main>

<style>
	.view {
		height: 80vh;
		width: 60%;
		padding: 0 10rem;

		border: 1px solid var(--text);

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 2rem;
	}
</style>
