<script>
	import JumpingText from '$lib/JumpingText.svelte';
</script>

<main>
	<img src="/sweet/grass_01.png" class="grass" alt="alt" />
	<img src="/sweet/sweet_02.png" class="logo" alt="alt" />
	<img src="/sweet/noels_txt_07.png" class="name" alt="alt" />
	<!-- <img src="/sweet/ballons_02.png" class="ballons" alt="alt" /> -->
	<img src="/sweet/noel_04.png" class="noel" alt="alt" />
	<img src="/sweet/head_01.png" class="head" alt="alt" />
	<img src="/sweet/rain_02.png" class="rainbow" alt="alt" />
	<div class="join">
		<JumpingText />
	</div>
</main>

<style lang="sass">

	main
		width: 100%
		max-height: 100vh

		display: flex
		justify-content: center
		align-items: center
		
		img
			position: absolute

		.grass
			width: 100%
			min-height: 45%
			object-fit: cover
			position: fixed
			bottom: 0px
			z-index: -7

		.rainbow
			z-index: -6
			top: 30%
		
		.ballons
			position: fixed
			z-index: -5
			top: 10%
			transform: scale(0.9) 

		.logo
			z-index: -4
			top: -2%
			transform: scale(0.9)

		.name
			z-index: -3
			top: 0%

		.noel
			z-index: -2
			top: 37%
			position: fixed

		.head
			z-index: -1
			position: fixed
			top: 40%

		.join
			transform: translateY(30%)
			z-index: 1


</style>
