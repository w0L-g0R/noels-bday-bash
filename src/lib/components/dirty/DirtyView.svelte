<script lang="ts">
	import { fly, fade, slide } from 'svelte/transition';
	import { quintOut, bounceOut } from 'svelte/easing';
	import NeonText from '$lib/elements/NeonText.svelte';
	import PixelText from '$lib/elements/PixelText.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { startDirtyViewSetupAnimations } from './animations/DirtyView.Setup';

	import { startDirtyViewInfiniteAnimations } from './animations/DirtyView.Infinite';

	const dispatchFinishedSetup = createEventDispatcher();

	onMount(() => {
		startDirtyViewSetupAnimations(startDirtyViewInfiniteAnimations, dispatchFinishedSetup);
	});
</script>

<main>
	<div class="bg">
		<img src="/dirty/garden_party_01.png" class="garden" alt="alt" out:fade={{ duration: 100 }} />
		<img src="/dirty/flames_03.png" class="flames" alt="alt" out:fade={{ duration: 100 }} />
		<img src="/dirty/boooze_01.png" class="booze" alt="alt" out:fade={{ duration: 100 }} />
		<div class="unicorn">
			<img src="/dirty/noel_04.png" class="noel-glasses" alt="alt" />
			<img src="/sweet/head_01.png" class="head" alt="alt" />
		</div>
		<img src="/dirty/glasses_01.png" class="glasses" alt="alt" />
		<img src="/dirty/fireworks_01.png" class="fireworks" alt="alt" out:fade={{ duration: 100 }} />
		<img src="/dirty/noel_txt_02.png" class="name" alt="alt" out:fly={{ duration: 3000, y: 200 }} />
		<div class="logo-container" out:fade={{ duration: 100 }}>
			<div class="dirty">
				<NeonText --font-family="Automania" showDirty={true} />
			</div>
			<div class="thirty">
				<NeonText --font-family="Automania" showDirty={false} />
			</div>
		</div>
		<div class="pixel-text" out:fade={{ duration: 100 }}>
			<PixelText />
		</div>
	</div>
</main>

<style lang="sass">

	@import './dirty-view.media-queries.sass'

	main
		.bg
			z-index: -8
			position: fixed
			top: 0
			left: 0
				
			min-width: 100%
			min-height: 100%
			height: 100vh
			box-shadow: 0px 0px 0px 15px black inset

			display: flex
			justify-content: center
			align-items: center
			background-color: black

		img
			position: absolute

		.garden
			z-index: -8
			position: fixed
			top: 0
			left: 0
			opacity: 0
				
			min-width: 100%
			min-height: 100%

			filter: contrast(228%) brightness(60%)

		.fireworks
			z-index: -7
			position: fixed
			top: -20%
			filter: contrast(100%) brightness(200%) 

		.booze
			z-index: -6
			filter: sepia(-100%) drop-shadow(0px 18px 18px orange) contrast(100%) brightness(100%)
			// opacity: 0

		.flames
			z-index: -5
			width: 100%
			min-height: 45%
			object-fit: cover
			bottom: 0px

		.name
			display: absolute
			z-index: -3
			top: -2%	
			height: 20%
			

		.logo-container
			display: flex
			justify-content: center
			align-items: center

			.dirty
				z-index: -1
				position: fixed

			.thirty
				z-index: -1
				position: fixed
				top: 28%


		.unicorn

			display: flex
			justify-content: center
			align-items: center
			transform: scale(1) translateY(20%)

			.head
				z-index: 1
				opacity: 1
				right: 28px

			.noel-glasses
				z-index: 0

		.glasses
			position: relative
			z-index: 1
			opacity: 0

		.pixel-text
			position: fixed
</style>
