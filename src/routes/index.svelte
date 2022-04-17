<script lang="ts">
	import Icon from '../components/icon.svelte';
	import Row from '../components/row.svelte';
	import { game_status } from '$lib/wordle_logic';
	import { updateStoreFromKey } from '$lib/helpers';
	import svelte from '$lib/svelte.svg';

	// Keydown Handler
</script>

<div id="index">
	<h1><Icon image_path={svelte} image_alt="Svelte Logo" />Svordle</h1>
	<!-- Row components!! -->
</div>

<!-- Add keydown event handler -->

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
