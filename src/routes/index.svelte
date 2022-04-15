<script lang="ts">
	import Icon from '../components/icon.svelte';
	import Row from '../components/row.svelte';
	import type { RowData } from '../utils/types';
	import { gameStateFactory, game_status } from '../utils/wordle_logic';
	import svelte from '$lib/svelte.svg';

	let local_game_status: RowData = gameStateFactory();

	game_status.subscribe((new_game_status) => {
		local_game_status = new_game_status;
	});
</script>

<div id="index">
	<h1><Icon image_path={svelte} image_alt="Svelte Logo" />Svordle</h1>
	<p>This is the index page</p>
	<Row cell_contents={local_game_status.row0} />
	<Row cell_contents={local_game_status.row1} />
	<Row cell_contents={local_game_status.row2} />
	<Row cell_contents={local_game_status.row3} />
	<Row cell_contents={local_game_status.row4} />
	<Row cell_contents={local_game_status.row5} />
</div>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<style lang="scss">
	// Center the index id with flexbox
	#index {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	// Globally add our fonts
	:global(*) {
		font-family: 'Roboto', sans-serif;
		background-color: rgb(29, 33, 33);
		color: whitesmoke;
	}
</style>
