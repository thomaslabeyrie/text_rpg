<script>
	let { text } = $props();
</script>

<main class="text-container">
	<p>
		{@html text}
	</p>
</main>

<style>
	.text-container {
		display: block;
		width: 100%;
		height: fit-content;
		max-height: 350px;

		/* border: 1px solid red; */

		overflow: scroll;
	}
</style>
