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
<main class="page grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center h-full min-h-[640px] lg:overflow-hidden">
    
    <!-- Info -->
    <section class="col-span-1 h-full p-4 space-y-10 lg:overflow-y-auto">
        
        {#if !compact}
            <a href="/works" class="block text-xl p-2">&larr; Back</a>
        {/if}
        
        <img src={`../../${work.thumbnail}`} class="image-crisp w-20 h-auto" alt="thumbnail">
        <header class="space-y-2">
            <h2 class="text-sm text-white/70 uppercase">{categoryLabel}</h2>
            <h1 class="section-label text-4xl">{work.name}</h1>
        </header>
        <a href={work.url} class="inline-block btn btn-hollow" target="_blank">Launch</a>
        <div>{@html work.details}</div>
    </section>

    <!-- Media -->
    <section class="col-span-2 h-full p-4 lg:p-10 bg-black/20 border-l border-white/10 flex flex-col items-center space-y-4 lg:space-y-10 lg:overflow-y-auto">
        {#if work.screenshots.length === 0}<p>Media unavailable.</p>{/if}
        {#each work.screenshots as screenshot}
            <div>
                <img src={screenshot.src} class="shadow-xl rounded-xl" alt="example">
                {#if screenshot.caption}<caption class="block mt-3 text-xs text-center opacity-60">{@html screenshot.caption}</caption>{/if}
            </div>
        {/each}
    </section>

</main>
{/if}