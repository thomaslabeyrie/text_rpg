<script>
	const items = [
		{
			name: 'Health Potion',
			value: 10
		},
		{
			name: 'Iron Sword',
			value: 25
		},
		{
			name: 'Leather Armor',
			value: 40
		}
	];
</script>

<main>
	<div class="container">
		<h2>{`Merchant's Inventory`.toUpperCase()}</h2>
		<ul class="items-list">
			{#each items as item}
				<li>
					<button>
						<span class="item-title">{item.name}</span>
						<span class="price">{item.value}g</span>
					</button>
				</li>
			{/each}
		</ul>
		<div class="actions">
			<button>BACK</button>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: hsla(0, 0%, 0%, 0.66);
	}

	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		border: 2px solid var(--text);
		background-color: var(--background);
		padding: 2rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
	}

	.items-list {
		width: 100%;

		li {
			width: 100%;
		}

		button {
			width: 100%;

			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 2rem;
		}
	}

	button:hover {
		color: var(--text-hovered);
	}
</style>
