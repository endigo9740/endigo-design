<script lang="ts">
    import { works } from '$lib/data/works';

    export let compact: boolean = false;
	export let category: string;
	export let id: string;

    const categoryLabel = works[category].label;
    const work: any = works[category].projects.find((p: any) => p.id === id);
</script>

<!-- Page -->
{#if work}
<main class="page grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center h-full min-h-[640px]">
    
    <!-- Info -->
    <section class="col-span-1 h-full p-4 space-y-10 lg:overflow-y-auto">
        <!-- Back Button -->
        {#if !compact}<a href="/works" class="block text-xl p-2 -translate-x-2">&larr; Back</a>{/if}
        <!-- Thumbnail -->
        {#if work.thumbnail}<img src={`../../${work.thumbnail}`} class="image-crisp w-20 h-auto" alt="thumbnail">{/if}
        <!-- Header -->
        <header class="space-y-2">
            <h2 class="text-sm text-white/70 uppercase">{categoryLabel}</h2>
            <h1 class="section-label text-4xl">{work.name}</h1>
        </header>
        <!-- Actions -->
        {#if work.url}<a href={work.url} class="inline-block btn btn-hollow" target="_blank">Launch</a>{/if}
        <!-- Details -->
        <div>
            {#each work.details as detailsParagraph}
            <p>{@html detailsParagraph}</p>
            {/each}
        </div>
        <p class="text-xs text-cyan-500">{work.technology || 'Tech not available.'}</p>
    </section>

    <!-- Media -->
    <section class="col-span-2 h-full p-4 lg:p-10 bg-black/20 border-l border-white/10 flex flex-col items-center space-y-4 lg:space-y-10 lg:overflow-y-auto">

        <!-- Video -->
        {#each work.videos as video}
            <div class="w-full">
                <iframe src={video.src} class="w-full aspect-video bg-black/30 border border-black/30 shadow-xl rounded-xl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {#if video.caption}<caption class="block mt-3 text-xs text-center opacity-60">{@html video.caption}</caption>{/if}
            </div>
        {/each}

        <!-- Screenshots -->
        {#each work.screenshots as screenshot}
            <div>
                <img src={screenshot.src} class="bg-black/30 border border-black/30 shadow-xl rounded-xl" alt="example" loading="lazy">
                {#if screenshot.caption}<caption class="block mt-3 text-xs text-center opacity-60">{@html screenshot.caption}</caption>{/if}
            </div>
        {/each}

    </section>

</main>
{/if}