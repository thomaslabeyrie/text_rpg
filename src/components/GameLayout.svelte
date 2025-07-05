<script>
</script>

<div class="layout">
	<header>
		<h1>Text RPG</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>© 2025 Thomas Labeyrie • Text RPG</p>
	</footer>
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

	h1 {
		font-size: 2rem;
	}

	main {
		padding: 1rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
