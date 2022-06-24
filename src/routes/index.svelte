<script lang="ts">
	import { fade, fly, blur, scale, slide } from 'svelte/transition';
	import { quintIn, bounceIn, elasticIn } from 'svelte/easing';
	import SweetView from '$lib/components/sweet/SweetView.svelte';
	import DirtyView from '$lib/components/dirty/DirtyView.svelte';
	import InfoView from '$lib/components/info/InfoView.svelte';
	let sweetView: boolean = true;
	let destroySweetView: boolean = false;
	let dirtyView: boolean = false;
	let infoView: boolean = false;
	let isSweetViewClickable: boolean = false;
	let isDirtyViewClickable: boolean = false;

	function changeFromSweetToDirtyView() {
		if (isSweetViewClickable) {
			destroySweetView = true;

			let sound = document.getElementById('audio');

			if (sound) {
				sound.play();
			}
		}
	}

	function removeSweetViewTemplateElements() {
		console.log('Destroyed Sweet View');
		sweetView = false;
		dirtyView = true;
	}

	function changeFromDirtyToInfoView() {
		if (isDirtyViewClickable) {
			dirtyView = false;
			infoView = true;
		}
	}
</script>

<main>
	{#if sweetView}
		<div out:fade on:click={changeFromSweetToDirtyView}>
			<SweetView
				{destroySweetView}
				on:finishedSetdownSweetView={removeSweetViewTemplateElements}
				on:finishedSetup={() => {
					isSweetViewClickable = true;
				}}
			/>
		</div>
	{/if}

	{#if dirtyView}
		<div
			out:fly={{ easing: elasticIn, y: -2000, duration: 2000 }}
			on:click={changeFromDirtyToInfoView}
		>
			<DirtyView
				on:finishedSetup={() => {
					isDirtyViewClickable = true;
				}}
			/>
		</div>
	{/if}

	{#if infoView}
		<div in:fly={{ delay: 2000, easing: bounceIn, y: 2000, duration: 1000 }}>
			<InfoView />
		</div>
	{/if}
	<audio id="audio" src="/src/lib/audio/spell.mp3" />
</main>

<style lang="sass">

</style>
