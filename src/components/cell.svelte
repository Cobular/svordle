<script lang="ts">
	import { current_word } from '$lib/wordle_logic';
	import { status } from "$lib/helpers";

	// Setup props
</script>

<!-- Some conditional class stuff! -->
<div class={`cell_parent ${status(submitted, $current_word, letter, index)}`}>
	<!-- Put the letter in the middle -->
</div>

<style lang="scss">
	.cell_parent {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 40px;
		height: 40px;

		border: 1px solid white;
		border-radius: 1px;

		margin: 5px;

		h3 {
			background-color: unset;
			color: black;
		}

		&.none {
			background-color: darkgrey;
		}
		&.correct {
			background-color: #2b712b;
		}
		&.wrong_position {
			background-color: #71712b;
		}
		&.incorrect {
			background-color: #712b2b;
		}
	}
</style>
