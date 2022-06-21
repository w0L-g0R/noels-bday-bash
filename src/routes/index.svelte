<script lang="ts">
	import JumpingText from '$lib/JumpingText.svelte';
	import SweetView from '$lib/components/sweet/SweetView.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	// @ts-ignore
	import anime from 'animejs';

	let currentView: string = 'sweet';
	let startDestroySweetView: boolean = false;

	function changeView() {
		startDestroySweetView = true;
	}

	function removeSweetViewTemplateElements() {
		console.log('Destroyed Sweet View');
		currentView = 'dirty';
	}
</script>

<main>
	<button on:click={changeView}>PAUSE</button>

	{#if currentView === 'sweet'}
		<div class="sweet-view">
			<SweetView
				{startDestroySweetView}
				on:finishedDestroyAnimation={removeSweetViewTemplateElements}
			/>
		</div>
	{/if}
</main>

<style lang="sass">

	.sweet-view
		width: 100%

</style>
