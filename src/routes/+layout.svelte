<script>
	let { children } = $props();
</script>

<div class="layout">
	<!-- <header>
		<h1>Mirewood Adventure</h1>
	</header> -->

	<main class="view">
		{@render children()}
	</main>

	<!-- <footer>
		<p>© 2025 Thomas Labeyrie • Text RPG</p>
	</footer> -->
</div>

<style>
	.layout {
		height: 100vh;
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* h1 {
		font-family: 'Jacquard 24';
		font-size: 3rem;
	} */

	.view {
		height: 95vh;
		width: 60vw;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
</style>
