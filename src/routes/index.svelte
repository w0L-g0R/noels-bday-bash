<script lang="ts">
	import { fade, fly, blur, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SweetView from '$lib/components/sweet/SweetView.svelte';
	import DirtyView from '$lib/components/dirty/DirtyView.svelte';
	let sweetView: boolean = true;
	let destroySweetView: boolean = false;
	let dirtyView: boolean = false;
	let isViewClickable: boolean = true;

	function changeView() {
		if (isViewClickable) {
			destroySweetView = true;
		}
	}

	function removeSweetViewTemplateElements() {
		console.log('Destroyed Sweet View');
		sweetView = false;
		dirtyView = true;
	}
</script>

<main>
	{#if sweetView}
		<div out:fade on:click={changeView}>
			<SweetView
				{destroySweetView}
				on:finishedSetdownSweetView={removeSweetViewTemplateElements}
				on:finishedSetup={() => {
					isViewClickable = true;
				}}
			/>
		</div>
	{/if}

	{#if dirtyView}
		<div
			on:click={() => {
				console.log('Hi');
				dirtyView = false;
			}}
		>
			<DirtyView />
		</div>
	{/if}
</main>

<style lang="sass">

</style>
