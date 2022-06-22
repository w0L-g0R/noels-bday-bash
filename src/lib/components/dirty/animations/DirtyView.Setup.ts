import { browser } from '$app/env';
import anime from 'animejs';

import type { Animations } from 'src/shared/types';

export function startDirtyViewSetupAnimations(infiniteAnimation?: Animations): void | any {
	if (browser) {
		const dirtyViewSetupAnimation = anime.timeline({
			//each of the below animations will have a 1000ms duration
			duration: 1000,
			easing: 'easeInSine',
			autoplay: true
		});

		// HEAD
		dirtyViewSetupAnimation.add(
			{
				targets: '.head',
				translateY: ['-100%', '1%'],
				scale: [3, 1],
				duration: 500
			},
			'1000'
		);

		dirtyViewSetupAnimation.add(
			{
				targets: '.noel-glasses',
				rotate: '2turn',
				scale: [0, 1],
				duration: 1000
			},
			'500'
		);

		// FLAMES;
		dirtyViewSetupAnimation.add(
			{
				targets: '.flames',
				translateY: ['100%', '10%']
			},
			'400'
		);

		dirtyViewSetupAnimation.add(
			{
				targets: '.booze',
				translateY: ['100%', '10%']
			},
			'400'
		);

		// FLAMES;
		dirtyViewSetupAnimation.add(
			{
				targets: '.garden',
				opacity: ['0%', '85%']
			},
			'400'
		);

		// // NAME
		dirtyViewSetupAnimation.add(
			{
				targets: '.name',
				scale: [
					{ value: ['0%', '100%'], duration: 500, easing: 'easeOutElastic' },
					{ value: ['100%', '60%'], easing: 'easeInElastic', duration: 500 }
				]
			},
			'1200'
		);

		// DIRTY;
		dirtyViewSetupAnimation.add(
			{
				targets: '.dirty',
				translateX: ['-100vw', '0vw'],
				easing: 'easeInOutQuint'
			},
			'1500'
		);

		// DIRTY;
		dirtyViewSetupAnimation.add(
			{
				targets: '.thirty',
				translateX: ['100vw', '0vw'],
				easing: 'easeInOutQuint'
			},
			'1500'
		);

		// DIRTY;
		dirtyViewSetupAnimation.add(
			{
				targets: '.fireworks',
				scale: ['0', '1'],
				easing: 'easeInQuart'
			},
			'1800'
		);

		// // NOEL
		// introOne.add(
		// 	{
		// 		targets: '.noel',
		// 		rotate: '-6deg',
		// 		translateY: ['150%', '20%'],
		// 		easing: 'spring(1, 20, 30, 10)'
		// 	},
		// 	'1400'
		// );

		// // LOGO
		// introOne.add(
		// 	{
		// 		targets: '.logo',
		// 		scale: ['0%', '100%'],
		// 		easing: 'easeOutBounce'
		// 	},
		// 	'1000'
		// );

		// // RAINBOW SCALE
		// introOne.add(
		// 	{
		// 		targets: '.rainbow',
		// 		scale: ['150%', '100%'],
		// 		easing: 'easeOutCubic'
		// 	},
		// 	'1800'
		// );

		// // RAINBOW OPACITY
		// introOne.add(
		// 	{
		// 		targets: '.rainbow',
		// 		opacity: ['0%', '80%'],
		// 		easing: 'easeOutCubic',
		// 		complete: infiniteAnimation
		// 	},
		// 	'1500'
		// );
	}
}
