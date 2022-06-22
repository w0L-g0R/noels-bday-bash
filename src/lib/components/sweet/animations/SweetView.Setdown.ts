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
				duration: 800,
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

		// SPEECH
		viewSwitchAnimation.add(
			{
				targets: '.speech-bubble',
				opacity: 1,
				duration: 500
			},
			'-=500'
		);

		// HEAD
		viewSwitchAnimation.add(
			{
				targets: '.head',
				translateY: ['1%', '-100%'],
				scale: 3,
				duration: 1000
			},
			'-=1500'
		);

		setTimeout(() => {
			anime({
				targets: '.bg',
				keyframes: [{ opacity: 0, duration: 50 }],
				easing: 'easeInCirc',
				direction: 'alternate',
				loop: 12,
				begin: function () {
					const e: HTMLElement = document.querySelector('.bg');
					if (e !== null) {
						e.style.filter = 'hue-rotate(130deg)sepia(13%)';
					}
				},
				complete: function () {
					dispatch('finishedSetdownSweetView');
				}
			});
		}, 1000);
		///////////////////////////////////////
	}
}
