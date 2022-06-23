import anime from 'animejs';

export function startDirtyViewInfiniteAnimations(): void | any {
	anime({
		targets: '.head',
		translateY: ['0%', '-28%'],
		duration: 250,
		loop: true,
		direction: 'alternate',
		// easing: 'spring(1, 20, 30, 10)'
		easing: 'easeInQuad'
	});
	anime({
		targets: '.noel-glasses',
		translateY: ['0%', '-10%'],
		duration: 250,
		loop: true,
		direction: 'alternate',
		// easing: 'spring(1, 20, 30, 10)'
		easing: 'easeInQuad'
	});

	anime({
		targets: '.glasses',
		translateY: ['0%', '-85%'],
		duration: 250,
		loop: true,
		direction: 'alternate',
		easing: 'easeInSine'
	});

	setTimeout(() => {
		anime({
			targets: '.fireworks',
			keyframes: [{ opacity: 0, duration: 500 }],
			easing: 'easeInCirc',
			direction: 'alternate',
			loop: true
		});
	}, 100);
}
