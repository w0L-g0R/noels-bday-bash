import { browser } from '$app/env';
import anime from 'animejs';

import type { Animations } from 'src/shared/types';

export function startSweetViewSetupAnimations(infiniteAnimation: Animations): void | any {
	if (browser) {
		const introOne = anime.timeline({
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
				translateY: ['150%', '40%'],
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
				complete: infiniteAnimation
			},
			'1500'
		);
	}
}
