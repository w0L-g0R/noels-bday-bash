import anime from 'animejs';

export function startSweetViewInfiniteAnimations(): void | any {
	anime({
		targets: '.ballons',
		opacity: ['60%', '100%'],
		translateY: ['220%', '-120%'],
		duration: 4000,
		easing: 'easeOutCubic',
		loop: true,
		delay: 1500
	});

	anime({
		targets: '.click-me',
		opacity: ['0%', '100%'],
		translateY: ['0%', '30%'],
		easing: 'easeOutSine',
		delay: 500
	});

	anime({
		targets: '.logo',
		keyframes: [{ scale: 0.7, duration: 600 }],
		easing: 'easeInOutSine',
		direction: 'alternate',
		loop: true
	});

	anime({
		targets: '.noel',
		rotate: ['-6deg', '6deg'],
		duration: 2000,
		easing: 'linear',
		loop: true,
		direction: 'alternate'
	});
}
