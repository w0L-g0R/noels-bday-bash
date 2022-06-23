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

	@import './media-queries/extra-small.sass'
	@import './media-queries/small.sass'
	@import './media-queries/medium.sass'
	@import './media-queries/large.sass'

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

		.name
			z-index: -3
			top: 6%
			transform: scale(2)
			max-width: 100%
			
			// @include media("<=small", "portrait")
			// 	top: 3%

			// @include media(">=medium", "portrait")
			// 	border: 2px solid pink
			// 	top: 0%
			// 	// transform: scale(0.3, 0.3)

			// @include media(">=medium", "landscape")
			// 	border: 2px solid red
			// 	top: 0%


		.dirty
			z-index: -1
			position: fixed
			top: 20%



		.thirty
			z-index: -1
			position: fixed
			top: 28%

			// @media screen and (max-height: 864px)
			// 	top: 30%

		.booze
			// min-width: 70%
			// max-width: 80%
			z-index: -6
			position: fixed
			top: 38%
			filter: sepia(10%) drop-shadow(0px 18px 18px orange) contrast(88%) brightness(100%)

			// @include media(">M01","<=M02","landscape")
			// // @media screen and (max-width: 300px)
			// 	top: 10%
			// 	border: 5px black solid

			// @media screen and (max-height: 864px)
			// 	top: 10%
			// 	max-width: 50%



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
			z-index: -5

		.fireworks
			position: fixed
			z-index: -7
			top: -20%
			filter: contrast(188%) brightness(0%) 

			// @media screen and (max-height: 864px)
			// 	top: -20%
			// 	width: 45%
			// 	min-width: 600px

</style>
