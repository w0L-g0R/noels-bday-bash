import anime from 'animejs';

export function startDirtyViewInfiniteAnimations(): void | any {
	const animeBallons = anime({
		targets: '.ballons',
		opacity: ['60%', '100%'],
		translateY: ['200%', '-180%'],
		duration: 4000,
		easing: 'easeOutCubic',
		loop: true,
		delay: 1500,
		autoplay: false
	});

	const animeClickMe = anime({
		targets: '.click-me',
		opacity: ['0%', '100%'],
		translateY: ['0%', '30%'],
		easing: 'easeOutSine',
		delay: 500
	});

	const animeLogo = anime({
		targets: '.logo',
		keyframes: [
			{ scale: 0.7, duration: 600 }
			// { scale: 0.65, duration: 200 }
		],
		easing: 'easeInOutSine',
		direction: 'alternate',
		loop: true
	});

	const animeNoel = anime({
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
