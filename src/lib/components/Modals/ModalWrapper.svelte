<script lang="ts">
	import { AppBar, getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	function onclose(): void {
		modalStore.close();
	}
</script>

<div class="card variant-glass max-h-full overflow-hidden grid grid-rows-[auto_1fr] w-full">
	<!-- Header -->
	<AppBar background="bg-surface-50-900-token" shadow="shadow">
		<svelte:fragment slot="lead">
			<span class="font-bold capitalize">
				<slot name="title">(slotTitle)</slot>
			</span>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<button class="btn-icon variant-soft" on:click={onclose}>×</button>
		</svelte:fragment>
	</AppBar>
	<!-- Body -->
	<section class="w-full h-full overflow-y-auto">
		<slot>(slotDefault)</slot>
	</section>
</div>
