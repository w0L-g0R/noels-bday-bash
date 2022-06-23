<script lang="ts">
	import JumpingText from '$lib/JumpingText.svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { startSweetViewSetupAnimations } from './animations/SweetView.Setup';
	import { startSweetViewInfiniteAnimations } from './animations/SweetView.Infinite';
	import { startSweetViewSetdownAnimations } from './animations/SweetView.Setdown';

	const dispatchFinishedDestroyAnimations = createEventDispatcher();

	export let destroySweetView = false;

	// Dispatches the "finish destroy animation" event
	$: startSweetViewSetdownAnimations(destroySweetView, dispatchFinishedDestroyAnimations);

	onMount(() => {
		startSweetViewSetupAnimations(startSweetViewInfiniteAnimations);
	});
</script>

<main>
	<div class="bg">
		<img src="/sweet/blue_01.png" class="bg" alt="alt" />
		<img src="/sweet/grass_01.png" class="grass" alt="alt" />
		<div class="logo-container">
			<img src="/sweet/sweet_02.png" class="logo" alt="alt" />
			<img src="/sweet/noels_txt_07.png" class="name" alt="alt" />
		</div>
		<img src="/sweet/head_01.png" class="head" alt="alt" />
		<img src="/sweet/rain_02.png" class="rainbow" alt="alt" />
		<img src="/sweet/just_kidding_01.png" class="just-kidding" alt="alt" />

		{#if !destroySweetView}
			<img src="/sweet/noel_04.png" class="noel" alt="alt" />
			<img src="/sweet/ballons_02.png" class="ballons left" alt="alt" />
			<img src="/sweet/ballons_02.png" class="ballons right" alt="alt" />
			<div class="click-me">
				<JumpingText />
			</div>
		{/if}
	</div>
</main>

<!-- <style lang="sass">

	@import './media-queries/extra-small.sass'
	// @import './media-queries/small.sass'
	// @import './media-queries/medium.sass'
	// @import './media-queries/large.sass'

	main
		.bg
			z-index: -8

			position: fixed
			top: 0
			left: 0
				
			min-width: 100%
			min-height: 100%
			display: flex
			justify-content: center
			align-items: center

		img
			position: absolute

		.grass
			width: 100%
			min-height: 45%
			object-fit: cover
			position: fixed
			bottom: 0px
			transform: translateY(60%)
			z-index: -7

		.just-kidding
			z-index: 1
			opacity: 0%
			position: fixed


		.rainbow
			position: fixed
			z-index: -6
			top: 30%
		
		.ballons
			opacity: 0%
			position: fixed
			z-index: -5
			// transform: scale(0.9) 

			&.right
				right: 10vw

			&.left
				left: 10vw

		.logo-container
			position: fixed
			top: 10%
			// left: 10%

			display: flex
			justify-content: center
			align-items: top

			// transform: translate(-50%, -50%)
			
			&.logo
				// position: relative
				z-index: -4

			&.name
				// position: fixed	
				z-index: -3
				// transform: translateY(150px)
				top: 200px

		.noel
			z-index: -2
			position: fixed

		.head
			z-index: -1
			position: fixed
			top: 40%
			opacity: 0

		.click-me
			opacity: 0%
			position: fixed
			z-index: 1


</style> -->
<style lang="sass">

	@import './sweet-view.media-queries.sass'

	main
		.bg
			z-index: -8

			position: fixed
			top: 0
			left: 0
				
			min-width: 100%
			min-height: 100%

			display: flex
			justify-content: center
			align-items: center

		img
			position: absolute

		.grass
			width: 100%
			min-height: 45%
			object-fit: cover
			bottom: 0px
			z-index: -7

		.just-kidding
			z-index: 1
			opacity: 0%


		.rainbow
			z-index: -6
		
		.ballons
			opacity: 0%
			z-index: -5

			&.right
				right: 10vw

			&.left
				left: 10vw

		.logo-container
			z-index: -4
			position: fixed
			top: 0%
			display: flex
			justify-content: center
			align-items: top

		.noel
			z-index: -2

		.head
			z-index: -1
			top: 40%
			opacity: 0

		.click-me
			opacity: 0%
			position: fixed
			z-index: 1

</style>
