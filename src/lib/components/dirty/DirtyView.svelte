<script lang="ts">
	import NeonText from '$lib/NeonText.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { startDirtyViewSetupAnimations } from './animations/DirtyView.Setup';
	// import { startSweetViewSetupAnimations } from './animations/DirtyView.Setup';
	// import { startSweetViewInfiniteAnimations } from './animations/DirtyView.Infinite';
	// import { startSweetViewSetdownAnimations } from './animations/DirtyView.Setdown';

	// const dispatchFinishedDestroyAnimations = createEventDispatcher();

	// export let startDestroySweetView = false;

	// // Dispatches the "finish destroy animation" event
	// $: startSweetViewSetdownAnimations(startDestroySweetView, dispatchFinishedDestroyAnimations);

	onMount(() => {
		startDirtyViewSetupAnimations();
	});
</script>

<main>
	<div class="bg">
		<img src="/dirty/garden_party_01.png" class="garden" alt="alt" />
		<img src="/dirty/flames_03.png" class="flames" alt="alt" />
		<img src="/dirty/boooze_01.png" class="booze" alt="alt" />
		<div class="unicorn">
			<img src="/dirty/noel_05_glasses.png" class="noel-glasses" alt="alt" />
			<img src="/sweet/head_01.png" class="head" alt="alt" />
		</div>
		<img src="/dirty/fireworks_01.png" class="fireworks" alt="alt" />
		<img src="/dirty/noel_txt_02.png" class="name" alt="alt" />
		<div class="logo-container">
			<div class="dirty">
				<NeonText --font-family="Automania" showDirty={true} />
			</div>
			<div class="thirty">
				<NeonText --font-family="Automania" showDirty={false} />
			</div>
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

			display: flex
			justify-content: center
			align-items: center

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
			filter: contrast(188%) brightness(0%) 

		.booze
			z-index: -6
			// top: 38%
			filter: sepia(10%) drop-shadow(0px 18px 18px orange) contrast(88%) brightness(100%)

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
				// top: 20%

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

</style>
