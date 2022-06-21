<script lang="ts">
	import JumpingText from '$lib/JumpingText.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	// @ts-ignore
	import anime from 'animejs';
	import { browser } from '$app/env';

	type ViewType = 'sweet' | 'dirty';

	let backgroundSweet: boolean = true;
	let grass: boolean = true;
	let ballons: boolean = true;
	let logo: boolean = true;
	let name: boolean = true;
	let noel_sweet: boolean = true;
	let rainbow: boolean = true;
	let clickMe: boolean = true;

	let flames: boolean = true;

	let animeBallons;
	let animeClickMe;
	let animeLogo;
	let animeNoel;

	import { createEventDispatcher } from 'svelte';

	const dispatchFinishedDestroyAnimations = createEventDispatcher();

	export let startDestroySweetView = false;

	$: setdown(startDestroySweetView);

	onMount(setup);
	// onDestroy(() => {
	// 	if (browser) {
	// 		setdown();
	// 	}
	// });

	function setup() {
		let introOne = anime.timeline({
			//each of the below animations will have a 1000ms duration
			duration: 1000,
			easing: 'easeInSine',
			autoplay: true
		});

		// GRASS
		introOne.add({
			targets: '.grass',
			translateY: ['30%', '1%']
		});

		// NOEL
		introOne.add(
			{
				targets: '.noel',
				rotate: '-6deg',
				translateY: ['150%', '20%'],
				easing: 'spring(1, 20, 30, 10)'
			},
			'1400'
		);

		// LOGO
		introOne.add(
			{
				targets: '.logo',
				scale: ['0%', '100%'],
				easing: 'easeOutBounce'
			},
			'1000'
		);

		// NAME
		introOne.add(
			{
				targets: '.name',
				scale: ['0%', '100%'],
				easing: 'easeOutElastic'
			},
			'1000'
		);

		// RAINBOW SCALE
		introOne.add(
			{
				targets: '.rainbow',
				scale: ['150%', '100%'],
				easing: 'easeOutCubic'
			},
			'1800'
		);

		// RAINBOW OPACITY
		introOne.add(
			{
				targets: '.rainbow',
				opacity: ['0%', '80%'],
				easing: 'easeOutCubic',
				complete: startInfiniteAnimation
			},
			'1500'
		);
	}

	function startInfiniteAnimation() {
		animeBallons = anime({
			targets: '.ballons',
			opacity: ['60%', '100%'],
			translateY: ['200%', '-180%'],
			duration: 4000,
			easing: 'easeOutCubic',
			loop: true,
			delay: 1500,
			autoplay: false
		});

		animeClickMe = anime({
			targets: '.click-me',
			opacity: ['0%', '100%'],
			translateY: ['0%', '30%'],
			easing: 'easeOutSine',
			delay: 500
		});

		animeLogo = anime({
			targets: '.logo',
			keyframes: [
				{ scale: 0.7, duration: 600 }
				// { scale: 0.65, duration: 200 }
			],
			easing: 'easeInOutSine',
			direction: 'alternate',
			loop: true
		});

		animeNoel = anime({
			targets: '.noel',
			rotate: ['-6deg', '6deg'],
			duration: 2000,
			easing: 'linear',
			loop: true,
			direction: 'alternate',
			// delay: 1500
			autoplay: false
		});

		animeBallons.play();
		animeNoel.play();
	}

	function setdown(startDestroySweetView: boolean) {
		if (browser && startDestroySweetView == true) {
			let viewSwitchAnimation = anime.timeline({
				//each of the below animations will have a 1000ms duration
				duration: 1500,
				easing: 'easeInSine',
				autoplay: true
			});

			// GRASS
			viewSwitchAnimation.add({
				targets: '.grass',
				translateY: ['1%', '130%'],
				complete: function () {
					dispatchFinishedDestroyAnimations('finishedDestroyAnimation');
				}
			});
		}

		// viewSwitchAnimation.add(
		// 	{
		// 		targets: '.flames',
		// 		translateY: ['100%', '0%'],
		// 		duration: 500,
		// 		easing: 'linear',
		// 		// autoplay: true

		// 		complete: function () {
		// 			grass = false;
		// 		}
		// 	},
		// 	'-=1000'
		// );

		// // NOEL
		// sweetViewOutro.add(
		// 	{
		// 		targets: '.noel',
		// 		rotate: '-6deg',
		// 		translateY: ['150%', '20%'],
		// 		easing: 'spring(1, 20, 30, 10)'
		// 	},
		// 	'1400'
		// );

		// // LOGO
		// sweetViewOutro.add(
		// 	{
		// 		targets: '.logo',
		// 		scale: ['0%', '100%'],
		// 		easing: 'easeOutBounce'
		// 	},
		// 	'1000'
		// );

		// // NAME
		// sweetViewOutro.add(
		// 	{
		// 		targets: '.name',
		// 		scale: ['0%', '100%'],
		// 		easing: 'easeOutElastic'
		// 	},
		// 	'1000'
		// );

		// // RAINBOW SCALE
		// sweetViewOutro.add(
		// 	{
		// 		targets: '.rainbow',
		// 		scale: ['150%', '100%'],
		// 		easing: 'easeOutCubic'
		// 	},
		// 	'1800'
		// );

		// // RAINBOW OPACITY
		// sweetViewOutro.add(
		// 	{
		// 		targets: '.rainbow',
		// 		opacity: ['0%', '80%'],
		// 		easing: 'easeOutCubic',
		// 		complete: startInfiniteAnimation
		// 	},
		// 	'1500'
		// );

		// console.log('Hi', animeNoel);
		// // animeBallons.autoplay = false;
		// // animeBallons.loop = false;
		// animeBallons.paused = true;
		// // animeNoel.pause();

		// // // animeBallons.remove();
		// // animeClickMe.pause;
		// // animeLogo.pause;
		// // animeNoel.pause;
	}
</script>

<main>
	<div class="bg" out:setdown>
		<img src="/sweet/blue_01.png" class="bg" alt="alt" />
		<img src="/sweet/grass_01.png" class="grass" alt="alt" />
		<img src="/dirty/flames_03.png" class="flames" alt="alt" />
		<img src="/sweet/sweet_02.png" class="logo" alt="alt" />
		<img src="/sweet/noels_txt_07.png" class="name" alt="alt" />
		<img src="/sweet/ballons_02.png" class="ballons" alt="alt" />
		<img src="/sweet/noel_04.png" class="noel" alt="alt" />
		<!-- <img src="/sweet/head_01.png" class="head" alt="alt" /> -->
		<img src="/sweet/rain_02.png" class="rainbow" alt="alt" />
		<div class="click-me">
			<JumpingText />
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
				
			/* Preserve aspet ratio */
			min-width: 100%
			min-height: 100%
			// width: 100%
			// // height: 100vh
			// max-height: 100vh

			// max-width: 100%
			// height: auto

			display: flex
			justify-content: center
			align-items: center

			// overflow: hidden

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

		.flames
			width: 100%
			min-height: 45%
			object-fit: cover
			position: fixed
			bottom: 0px
			transform: translateY(100%)
			z-index: -7

		.rainbow
			position: fixed
			z-index: -6
			top: 30%
		
		.ballons
			opacity: 0%
			position: fixed
			z-index: -5
			// top: 10%
			transform: scale(0.9) 

		.logo
			z-index: -4
			top: -2%
			// transform: scale(0.9)

		.name
			z-index: -3
			top: 0%

		.noel
			z-index: -2
			// top: 37%
			position: fixed

		.head
			z-index: -1
			position: fixed
			top: 40%

		.click-me
			opacity: 0%
			position: fixed
			z-index: 1


</style>
