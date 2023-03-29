<script lang="ts">
	import { fly } from 'svelte/transition';
	import { dialogStore } from '$lib/game/stores';

	function dismiss(): void {
		dialogStore.set(undefined);
	}
</script>

{#if $dialogStore !== undefined}
	<section
		class="card fixed left-4 right-4 bottom-4 max-w-[1200px] mx-auto md:grid grid-cols-5 gap-8 p-4 space-y-4 md:space-y-0"
		transition:fly={{ y: 500, duration: 150 }}
	>
		<!-- Portrait -->
		<div class="col-span-1 flex justify-center items-center">
			<img
				src={$dialogStore.portrait}
				class="crisp border-4 border-white w-[200px] rounded-xl shadow-xl md:-translate-y-8"
				alt="portrait"
			/>
		</div>

		<!-- Text -->
		<div class="col-span-3 space-y-4">
			<h3>{$dialogStore.name}</h3>
			<p class="text-lg md:text-xl">{@html $dialogStore.message}</p>
		</div>

		<!-- Actions -->
		<nav class="col-span-1 flex justify-center items-center">
			<button type="button" class="btn variant-filled" on:click={dismiss}>Okay, got it!</button>
		</nav>
	</section>
{/if}
