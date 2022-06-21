<script lang="ts">
	import NeonText from '$lib/NeonText.svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
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
		<img src="/sweet/head_01.png" class="head" alt="alt" />
		<img src="/dirty/flames_03.png" class="flames" alt="alt" />
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

		img
			position: absolute

		// .grass
		// 	width: 100%
		// 	min-height: 45%
		// 	object-fit: cover
		// 	position: fixed
		// 	bottom: 0px
		// 	transform: translateY(60%)
		// 	z-index: -7

		.head
			z-index: -1
			position: fixed
			top: 40%
			opacity: 0

		.flames
			width: 100%
			min-height: 45%
			object-fit: cover
			position: fixed
			bottom: 0px
			transform: translateY(100%)
			z-index: -7

		// .thirty
		// 	position: fixed
		// 	z-index: -6
		// 	top: 30%
		
		// .ballons
		// 	opacity: 0%
		// 	position: fixed
		// 	z-index: -5
		// 	transform: scale(0.9) 

		// .logo
		// 	z-index: -4
		// 	top: -2%

		// .name
		// 	z-index: -3
		// 	top: 0%

		// .noel
		// 	z-index: -2
		// 	position: fixed

		// .head
		// 	z-index: -1
		// 	position: fixed
		// 	top: 40%

		// .click-me
		// 	opacity: 0%
		// 	position: fixed
		// 	z-index: 1


</style>
