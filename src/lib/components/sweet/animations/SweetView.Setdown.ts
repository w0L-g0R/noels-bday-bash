import { browser } from '$app/env';
import anime from 'animejs';
import { compute_slots } from 'svelte/internal';

import type { Dispatch } from 'src/shared/types';
export function startSweetViewSetdownAnimations(
	startDestroySweetView: boolean,
	dispatch: Dispatch
): void | any {
	if (browser && startDestroySweetView == true) {
		const viewSwitchAnimation = anime.timeline({
			//each of the below animations will have a 1000ms duration
			duration: 1500,
			easing: 'easeInSine',
			autoplay: true
		});

		// GRASS
		viewSwitchAnimation.add({
			targets: '.grass',
			translateY: ['1%', '130%']
		});

		// HEAD
		viewSwitchAnimation.add(
			{
				targets: '.rainbow',
				scale: 0,
				duration: 500
			},
			'-=1500'
		);

		viewSwitchAnimation.add(
			{
				targets: '.logo',
				translateY: '-170%',
				duration: 500
			},
			'-=1500'
		);

		viewSwitchAnimation.add(
			{
				targets: '.logo',
				opacity: 0,
				duration: 100
			},
			'-=1500'
		);

		viewSwitchAnimation.add(
			{
				targets: '.name',
				translateY: '-170%',
				duration: 500
			},
			'-=2500'
		);

		viewSwitchAnimation.add(
			{
				duration: 1000,
				easing: 'easeInCirc',
				begin: function () {
					const e: HTMLElement = document.querySelector('.ballons');
					if (e !== null && e.parentElement !== null) {
						e.parentElement.removeChild(e);
					}
				}
			},
			'-=1000'
		);

		// HEAD
		viewSwitchAnimation.add(
			{
				targets: '.noel',
				scale: 0,
				duration: 1000,
				complete: () => {
					const e: HTMLElement = document.querySelector('.noel');
					if (e !== null && e.parentElement !== null) {
						e.parentElement.removeChild(e);
					}
				}
			},
			'-=1800'
		);

		// HEAD
		viewSwitchAnimation.add(
			{
				targets: '.head',
				opacity: 1,
				duration: 100
			},
			'-=1500'
		);

		// HEAD
		viewSwitchAnimation.add(
			{
				targets: '.head',
				translateY: ['1%', '-120%'],
				scale: 4,
				duration: 600,
				complete: function () {
					dispatch('finishedSetdownSweetView');
				}
			},
			'-=1500'
		);

		setTimeout(() => {
			anime({
				targets: '.bg',
				keyframes: [{ opacity: 0, duration: 50 }],
				easing: 'easeInCirc',
				direction: 'alternate',
				loop: 16,
				begin: function () {
					const e: HTMLElement = document.querySelector('.bg');
					if (e !== null) {
						e.style.filter = 'hue-rotate(130deg)sepia(13%)';
					}
				}
			});
		}, 800);
		///////////////////////////////////////
		// viewSwitchAnimation.add(
		// 	{
		// 		targets: '.bg',
		// 		keyframes: [
		// 			{ opacity: 0, duration: 10 },
		// 			{ opacity: 1, duration: 10 }
		// 		],
		// 		easing: 'easeInOutSine',
		// 		direction: 'alternate',
		// 		loop: true
		// 	},
		// 	'200'
		// );

		// NOEL
		// viewSwitchAnimation.add(
		// 	{
		// 		targets: '.noel',
		// 		// rotate: {
		// 		// 	value: '2turn'
		// 		// },
		// 		scale: [1, 0]
		// 		// complete: function () {
		// 		// 	dispatch('finishedSetdownSweetView');
		// 		// }
		// 	},
		// 	'-=500'
		// );
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
