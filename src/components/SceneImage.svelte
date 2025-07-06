<script>
	let { src } = $props();
</script>

<main class="image-container">
	<img {src} alt="placeholder" />
</main>

<style>
	.image-container {
		height: 512px;
		width: 512px;
		line-height: 0;

		border: 1px solid black;

		img {
			image-rendering: pixelated;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
