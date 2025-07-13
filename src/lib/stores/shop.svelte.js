export const shopItems = [
	{
		name: 'Potion',
		type: 'consumable',
		description: 'Restores 25 health.',
		value: 10,
		drink() {
			if (player.health <= 50) {
				player.health += 50;
			} else {
				player.health = 100;
			}
		}
	},

	{
		name: 'Iron Sword',
		type: 'weapon',
		power: 20,
		description: 'A basic iron sword.',
		value: 25
	}
];
