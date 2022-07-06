<script lang="ts">
    import { works } from '$lib/works';

    export let compact: boolean = false;
	export let category: string;
	export let id: string;

    const categoryLabel = works[category].label;
    const work: any = works[category].projects.find((p: any) => p.id === id);
</script>

<!-- Page -->
{#if works}
<main class="page grid grid-cols-3 items-center h-full min-h-[640px] overflow-hidden">
    
    <!-- Info -->
    <section class="col-span-1 h-full p-4 space-y-10 !overflow-y-auto">
        {#if !compact}<a href="/works">&larr; Back to Works</a>{/if}
        <header class="space-y-2">
            <h2 class="text-sm text-white/70 uppercase">{categoryLabel}</h2>
            <h1 class="section-label text-4xl">{work.name}</h1>
        </header>
        <a href={work.url} class="inline-block btn btn-hollow" target="_blank">Launch</a>
        <div>{@html work.details}</div>
    </section>

    <!-- Media -->
    <section class="col-span-2 h-full py-4 px-20 bg-black/20 border-l border-white/10 backdrop-blur-xl flex flex-col items-center space-y-10 overflow-y-auto">
        {#if work.screenshots.length === 0}<p>Media unavailable.</p>{/if}
        {#each work.screenshots as screenshot}
            <img src={screenshot} class="shadow-xl rounded-xl" alt="example">
        {/each}
    </section>

</main>
{/if}