import { browser } from '$app/env';
import anime from 'animejs';

import type { Animations, Dispatch } from 'src/shared/types';

export function startDirtyViewSetupAnimations(
	infiniteAnimation: Animations,
	dispatch: Dispatch
): void | any {
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
				translateY: ['-200%', '0%'],
				opacity: { value: [0, 1], duration: 200 },
				scale: [9, 1],
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

		dirtyViewSetupAnimation.add(
			{
				targets: '.glasses',
				translateY: ['-400%', '0%'],
				opacity: [0, 1],
				duration: 1000
			},
			'1500'
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
				easing: 'easeInQuart',
				complete: infiniteAnimation
			},
			'1800'
		);

		// DIRTY;
		dirtyViewSetupAnimation.add(
			{
				targets: '.pixel-text',
				translateY: ['100vh', '20vh'],
				translateX: ['0', '2vw'],
				easing: 'easeInOutQuint',
				duration: 1500,
				complete: () => {
					dispatch('finishedSetup');
					// setTimeout(() => {
					// }, 200);
				}
			},
			'2000'
		);
	}
}
