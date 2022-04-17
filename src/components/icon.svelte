<!-- Really small brain icon component -->
<script lang="ts">
	export let image_path: string;
	export let image_alt: string;
</script>

<div class="inline-img-wrapper">
	<div class="inline-img-flex">
		<img class="inline-img" src={image_path} alt={image_alt} />
	</div>
</div>

<style lang="scss">
	.inline-img-wrapper {
		display: inline-block;
		margin-right: 5px;
		height: 100%;
	}

	.inline-img-flex {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.inline-img {
		display: inline-block;
		height: 1em;
	}
</style>
