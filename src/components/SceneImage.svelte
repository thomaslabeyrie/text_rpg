<script>
	let { src } = $props();
</script>

<main class="image-container">
	<img {src} alt="placeholder" />
</main>

<style>
	.image-container {
		height: fit-content;
		width: fit-content;
		line-height: 0;

		border: 1px solid var(--text);
	}
</style>
