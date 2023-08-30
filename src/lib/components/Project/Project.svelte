<script lang="ts">
	import { works } from '$lib/works';

	export let embedded: boolean = false;
	export let data: any = undefined;
	const { category, id } = data;

	const categoryLabel = works[category].label;
	const work: any = works[category].projects.find((p: any) => p.id === id);
</script>

<!-- Page -->
{#if work}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center h-full min-h-[640px]">
		<!-- Info -->
		<section class="col-span-1 h-full p-4 space-y-10 lg:overflow-y-auto">
			<!-- Back Button -->
			{#if !embedded}<a href="/works" class="btn-icon variant-soft">&larr;</a>{/if}
			<!-- Thumbnail -->
			{#if work.thumbnail}
				<img src={work.thumbnail} class="w-[200px] h-auto rounded shadow-xl" style:background-color={work.accent} alt="thumbnail" />
			{/if}
			<!-- Header -->
			<header class="space-y-2">
				<h6 class="h6 font-bold uppercase opacity-75">{categoryLabel}</h6>
				<h2 class="h2 section-header">{work.name}</h2>
			</header>
			<!-- Actions -->
			{#if work.url}<a href={work.url} class="btn variant-filled" target="_blank" rel="noreferrer">Launch</a>{/if}
			<!-- Details -->
			<div class="space-y-4">
				{#each work.details as detailsParagraph}
					<p>{@html detailsParagraph}</p>
				{/each}
			</div>
			<small class="block text-xs opacity-50">{work.technology || 'Tech not available.'}</small>
		</section>

		<!-- Media -->
		<section
			class="col-span-2 h-full p-4 lg:p-10 bg-black/20 border-l border-white/10 flex flex-col items-center space-y-4 lg:space-y-10 lg:overflow-y-auto"
		>
			<!-- Video -->
			{#each work.videos as video}
				<div class="w-full">
					<iframe
						src={video.src}
						class="w-full aspect-video bg-black/30 border border-black/30 shadow-xl rounded-xl"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						loading="lazy"
					/>
					{#if video.caption}<caption class="block mt-3 text-xs text-center opacity-60">{@html video.caption}</caption>{/if}
				</div>
			{/each}

			<!-- Screenshots -->
			{#each work.screenshots as screenshot}
				<div>
					<img src={screenshot.src} class="bg-black/30 border border-black/30 shadow-xl rounded-xl" alt="example" loading="lazy" />
					{#if screenshot.caption}<caption class="block mt-3 text-xs text-center opacity-60">{@html screenshot.caption}</caption>{/if}
				</div>
			{/each}
		</section>
	</div>
{/if}
