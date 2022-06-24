<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ delay: 500, easing: quintOut, duration: 1000 }}>
	<div class="text">
		<slot name="text" />
	</div>
	<div class="link">
		<slot name="link" />
	</div>
</section>

<style lang="sass">
	@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap')

	section	
			display: flex
			justify-content: center
			align-content: center
			flex-direction: column
			// width: 100%

			.text
				font-family: "Quicksand", sans-serif
				font-style: normal
				font-size: var(--font-size)
				font-weight: bold
				// padding: 1vw

				@include media("<=width-xs", "portrait")
					font-size: 0.8em

			.link
				font-family: "Quicksand", sans-serif
				font-style: normal
				font-size: var(--font-size)
				font-weight: bold
				color: green

			

</style>
