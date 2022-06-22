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
	<!-- <div class="dirty">
		<NeonText --font-family="Automania" showDirty={true} />
	</div>
	<div class="thirty">
		<NeonText --font-family="Automania" showDirty={false} />
	</div> -->

	<div class="bg">
		<img src="/dirty/garden_party_01.png" class="garden" alt="alt" />
		<img src="/dirty/flames_03.png" class="flames" alt="alt" />
		<img src="/dirty/boooze_01.png" class="booze" alt="alt" />
		<div class="unicorn" in:fade>
			<img src="/dirty/noel_05_glasses.png" class="noel-glasses" alt="alt" />
			<img src="/sweet/head_01.png" class="head" alt="alt" />
		</div>
		<img src="/dirty/noel_txt_02.png" class="name" alt="alt" />
		<img src="/dirty/fireworks_01.png" class="fireworks" alt="alt" />
		<div class="dirty">
			<NeonText --font-family="Automania" showDirty={true} />
		</div>
		<div class="thirty">
			<NeonText --font-family="Automania" showDirty={false} />
		</div>
	</div>
</main>

<style lang="sass">

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

		.garden
			z-index: -8
			position: fixed
			top: 0
			left: 0
			opacity: 0
				
			min-width: 100%
			min-height: 100%

			filter: contrast(228%) brightness(60%)

		img
			position: absolute

		.dirty
			z-index: -1
			position: fixed
			top: 20%

		.thirty
			z-index: -1
			position: fixed
			top: 28%

		.booze
			min-width: 70%
			max-width: 80%
			z-index: -7
			position: fixed
			top: 38%
			filter: sepia(10%) drop-shadow(0px 18px 18px orange) contrast(88%) brightness(100%)

		.unicorn
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -20%)

			.head
				z-index: 1
				position: absolute
				// bottom: 24px
				opacity: 1
				scale: 4,
				right: 26px
				top: 200px


			.noel-glasses
				z-index: 0
				position: relative


		.flames
			width: 100%
			min-height: 45%
			object-fit: cover
			position: fixed
			bottom: 0px
			transform: translateY(100%)
			z-index: -6

		.fireworks
			position: fixed
			z-index: -6
			top: -20%
			filter: contrast(188%) brightness(0%) 

		// .ballons
		// 	opacity: 0%
		// 	position: fixed
		// 	z-index: -5
		// 	transform: scale(0.9) 

		// .logo
		// 	z-index: -4
		// 	top: -2%

		.name
			z-index: -3
			top: 2%
			transform: scale(0.5)



		// .head
		// 	z-index: -1
		// 	position: fixed
		// 	top: 40%

		// .click-me
		// 	opacity: 0%
		// 	position: fixed
		// 	z-index: 1


</style>
