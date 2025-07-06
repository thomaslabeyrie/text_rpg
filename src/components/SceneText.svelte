<script>
	let { text } = $props();
</script>

<main class="text-container">
	<p>
		{text}
	</p>
</main>

<style>
	.text-container {
		width: 100%;
		padding: 1.5rem;
		border: 1px solid var(--text);
	}
</style>
