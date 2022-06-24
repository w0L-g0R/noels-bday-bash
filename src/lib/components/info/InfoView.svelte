<script lang="ts">
	import anime from 'animejs';
	import Content from './Content.svelte';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, blur, scale, slide } from 'svelte/transition';

	let isOpen: Record<string, boolean> = {
		what: false,
		when: false,
		where: false,
		who: false,
		info: false
	};

	const buttonNames = ['what', 'when', 'where', 'who', 'info'];

	function expandButton(e: HTMLElement) {
		anime({
			targets: e,
			height: '100%',
			width: '29vw',
			easing: 'easeInQuint',
			autoplay: true,
			duration: 1700
		});
	}

	function collapseButton(e: HTMLElement) {
		anime({
			targets: e,
			height: '100%',
			width: '28vw',
			easing: 'easeInSine',
			autoplay: true,
			duration: 500
		});
	}

	function onClick(selector: string) {
		Object.keys(isOpen).forEach((key) => {
			const selectorName = `button ${key}`;
			const e: HTMLElement = document.getElementsByClassName(selectorName);

			let buttonState = isOpen[key];
			if (key === selector) {
				if (buttonState === true) {
					collapseButton(e);
				} else {
					expandButton(e);
				}
				isOpen[key] = !isOpen[key];
			} else if (key !== selector) {
				collapseButton(e);
				isOpen[key] = false;
			}
		});
	}
</script>

<main>
	<div class="container">
		<div class="buttons">
			{#each buttonNames as name}
				<div class="button {name}" on:click|preventDefault|self={() => onClick(`${name}`)}>
					<div class="header" on:click|preventDefault|self={() => onClick(`${name}`)}>{name}</div>

					{#if isOpen[name]}
						{#if name === 'what'}
							<Content --font-size="1.25em">
								<div slot="text">Noel's 30er Bday Partypicknik @Prater</div>
							</Content>
						{/if}

						{#if name === 'when'}
							<Content --font-size="1.25em">
								<div slot="text">
									<p><span style="color: darkblue;">Date:</span> <br />Samstag, 02.07.2022</p>
									<br />
									<p><span style="color: darkblue;">Start:</span><br /> <time>15:00</time></p>
								</div>
							</Content>
						{/if}

						{#if name === 'where'}
							<Content --font-size="1.25em">
								<div slot="link">
									<a href="https://goo.gl/maps/oCHBfHGkVY8J63st9"> JesuitenWiese</a>
								</div>
							</Content>
						{/if}

						{#if name === 'who'}
							<Content --font-size="1.25em">
								<div slot="link">
									<a href="https://doodle.com/meeting/participate/id/bWnBQnva">Gästeliste</a>
								</div>
							</Content>
						{/if}

						{#if name === 'info'}
							<Content --font-size="1em">
								<div slot="text">
									<div style="padding: 2vw">
										<ul>
											<li>
												<span style="color: orange"> Hamma': </span> <br /> Bissl Bier, Wein, Spiritus
												und 2x Riesenbrezn
											</li>
											<br />
											<li>
												<span style="color: orange"> Brauchma': <br /></span> Mehr Bier, Wein, Spiritus
												und Essen
											</li>
											<br />
											<li>
												<span style="color: orange"> Guadwa': <br /></span> Picknickdecken & eure Begleitung
											</li>
										</ul>
										<br />
										<p>Freu mich!</p>
										<p>Dickes Bussi, euer Noel</p>
									</div>
								</div>
							</Content>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	</div>
</main>

<style lang="sass">

	@mixin header($fontSize:5em)
		font-family: "Bebas Kai", sans-serif
		font-style: normal
		font-size: $fontSize
		font-weight: bold
		z-index: -1

		@media (max-width: 340px)
			font-size: 1.25em

	main	
		aspect-ratio: 900/450
		width: 100vw
		height: 100vh
		background-image: url("/bg/waves.svg")
		background-position: center
		background-size: cover
		box-shadow: 0px 0px 0px 15px black inset
		overflow: hidden

		.container

			// height: 100%
			width: 100%
			display: flex
			justify-content: center

			justify-items: center
			align-items: center

			div 
				a
					@media (max-width: 400px)
						font-size: 0.85em


			.buttons

				position: fixed
				top: 50%
				left: 50%
				transform: translate(-63%,-40%,)

				.button
					max-width: 500px
					border: 4px black solid
					min-width: 100%
					overflow: hidden
					display: grid
					justify-content: center
					align-content: start
					padding: 2vh
					box-shadow: 5px 5px 0px 1px #000000
					letter-spacing: 0.0425em
					margin-bottom: 2vh

					&.what
						background-color: #D655B9
						transform: rotate(-3deg) scale(120%)

						.header
 							@include header(3em)

					&.when 
						z-index: 2
						background-color: #66dcda
						transform: rotate(3deg) skew(-2deg) translateX(5%)
						
						.header
 							@include header(3em)

					&.where
						z-index: -2
						background-color: #86dc66
						transform: rotate(-6deg) translateY(-23%) skew(-1deg)
						
						.header
 							@include header(3em)


					&.who
						background-color: #dccc66
						transform: rotate(3deg) skew(1deg) translate(12%,-44%)
						
						.header
 							@include header(3em)

					&.info
						background-color: #dc6666
						transform: rotate(-4deg) skew(1deg) translate(12%,-64%)
						
						.header
 							@include header(3em)

</style>
