<script lang="ts">
	import { fade, fly, blur, scale } from 'svelte/transition';
	import SweetView from '$lib/components/sweet/SweetView.svelte';
	import DirtyView from '$lib/components/dirty/DirtyView.svelte';

	let sweetView: boolean = true;
	let destroySweetView: boolean = false;
	let dirtyView: boolean = false;

	function changeView() {
		destroySweetView = true;
		dirtyView = true;
	}

	function removeSweetViewTemplateElements() {
		console.log('Destroyed Sweet View');
		sweetView = false;
	}
</script>

<main>
	<button on:click={changeView}>PAUSE</button>

	{#if sweetView}
		<div out:fade>
			<SweetView {destroySweetView} on:finishedSetdownSweetView={removeSweetViewTemplateElements} />
		</div>
	{/if}

	{#if dirtyView}
		<div>
			<DirtyView />
		</div>
	{/if}
</main>

<style lang="sass">

</style>
