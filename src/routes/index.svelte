<script lang="ts">
	import Icon from '../components/icon.svelte';
	import Row from '../components/row.svelte';
	import { game_status } from '$lib/wordle_logic';
	import { updateStoreFromKey } from '$lib/helpers';
	import svelte from '$static/svelte.svg';

	function handleKeydown(event: KeyboardEvent) {
		$game_status = updateStoreFromKey(event, $game_status);
	}
</script>

<div id="index">
	<h1><Icon image_path={svelte} image_alt="Svelte Logo" />Svordle</h1>
	<Row cell_contents={$game_status.row0} />
	<Row cell_contents={$game_status.row1} />
	<Row cell_contents={$game_status.row2} />
	<Row cell_contents={$game_status.row3} />
	<Row cell_contents={$game_status.row4} />
	<Row cell_contents={$game_status.row5} />
</div>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
	<title>Svordle</title>
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
