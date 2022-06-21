import { browser } from '$app/env';
import anime from 'animejs';

import type { Dispatch } from 'src/shared/types';

export function startDirtyViewSetdownAnimations(
	startDestroyDirtyView: boolean,
	dispatch: Dispatch
): void | any {
	if (browser && startDestroyDirtyView == true) {
		const viewSwitchAnimation = anime.timeline({
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
				dispatch('finishedSetdownDirtyView');
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
	// DirtyViewOutro.add(
	// 	{
	// 		targets: '.noel',
	// 		rotate: '-6deg',
	// 		translateY: ['150%', '20%'],
	// 		easing: 'spring(1, 20, 30, 10)'
	// 	},
	// 	'1400'
	// );

	// // LOGO
	// DirtyViewOutro.add(
	// 	{
	// 		targets: '.logo',
	// 		scale: ['0%', '100%'],
	// 		easing: 'easeOutBounce'
	// 	},
	// 	'1000'
	// );

	// // NAME
	// DirtyViewOutro.add(
	// 	{
	// 		targets: '.name',
	// 		scale: ['0%', '100%'],
	// 		easing: 'easeOutElastic'
	// 	},
	// 	'1000'
	// );

	// // RAINBOW SCALE
	// DirtyViewOutro.add(
	// 	{
	// 		targets: '.rainbow',
	// 		scale: ['150%', '100%'],
	// 		easing: 'easeOutCubic'
	// 	},
	// 	'1800'
	// );

	// // RAINBOW OPACITY
	// DirtyViewOutro.add(
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
