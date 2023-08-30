<script lang="ts">
	import { cameraStore, entitiesStore } from '$lib/game/stores';
	import { works } from '$lib/works';
	import Map from '$lib/game/components/Map/Map.svelte';

	// Skeleton
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	// export let pillars: any;
	// export let npcs: any;
	// export let cats: any;
	let { pillars, npcs, cats } = $entitiesStore;

	const worksArr: any[] = Object.values(works);

	function navigateTo(entity: any): void {
		cameraStore.set({ type: 'entity', target: entity, animate: true });
		close();
	}

	function naviateToPillar(project: any): void {
		cameraStore.set({
			type: 'coords',
			x: project.coords.x + 2, // focus on
			y: project.coords.y + 3, // pillar base
			targetHeight: 1,
			targetWidth: 1,
			animate: true
		});
		close();
	}

	function close(): void {
		modalStore.close();
	}
</script>

<!-- Body -->
<div class="w-full h-full flex-auto block lg:flex overflow-auto lg:overflow-hidden">
	<!-- Map -->
	<div class="flex-none lg:flex-[50%] bg-white/30 dark:bg-black/30 border-r border-white/10 p-4 flex items-center">
		<Map {pillars} {npcs} />
	</div>

	<!-- Points of Interest -->
	<div class="flex-none lg:flex-[50%] p-4 overflow-x-auto space-y-8">
		<!-- Characters -->
		<section class="space-y-4">
			<h2 class="h2">Characters</h2>
			<p>
				Shown in <span class="badge variant-soft-secondary">blue</span> - interact and chat with Chris and other special guests.
			</p>
			<nav class="grid grid-cols-3 gap-2">
				<!-- NPCs -->
				{#each npcs as npc}
					<li
						class="bg-white/30 dark:bg-black/30 text-xs p-1 flex flex-col items-center rounded cursor-pointer hover:!bg-secondary-500"
						
					>
						<button on:click={() => { navigateTo(npc); }} on:keypress>
							<img src={npc.portrait} class="crisp w-full aspect-square rounded" alt="portrait" />
							<h6 class="h6 mt-3 mb-2">{npc.name}</h6>
						</button>
					</li>
				{/each}
				<!-- Layla -->
				{#each cats as cat}
					<li
						class="bg-white/30 dark:bg-black/30 text-xs p-1 flex flex-col items-center rounded cursor-pointer hover:!bg-secondary-500"
						
					>
						<button on:click={() => { navigateTo(cat); }} on:keypress>
							<img src={cat.portrait} class="crisp w-full aspect-square rounded" alt="portrait" />
							<h6 class="h6 mt-3 mb-2">{cat.name}</h6>
						</button>
					</li>
				{/each}
			</nav>
		</section>

		<!-- Pillars -->
		<section class="space-y-4">
			<h2 class="h2">Pillars</h2>
			<p>
				Shown in <span class="badge variant-soft-primary">pink</span> - each represents a project Chris has created or contributed to
			</p>
			<!-- Per Each Category -->
			{#each Object.values(worksArr) as category, i}
				<h4 class="h4">{category.label}</h4>
				<nav class="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
					<!-- Per Each Project -->
					{#each category.projects as project}
						<button
							class="card bg-white/30 dark:bg-black/30 p-1 rounded cursor-pointer grid grid-cols-[64px_1fr] gap-4 place-items-center hover:!bg-primary-500"
							on:click={() => {
								naviateToPillar(project);
							}}
							on:keypress
						>
							<img class="rounded" style:background={project.accent} src={`${project.thumbnail}`} alt="thumbnail" />
							<span class="text-base font-bold">{project.name}</span>
							<!-- TODO: need to cross reference 'pillars' data -->
							<!-- {#if pillar.found}<div class="font-bold uppercase">Found</div>{/if} -->
						</button>
					{/each}
				</nav>
			{/each}
		</section>
	</div>
</div>
