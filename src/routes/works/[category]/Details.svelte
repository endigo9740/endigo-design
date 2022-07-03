<script lang="ts">
    import { works } from '$lib/works';

	export let category: string;
	export let id: string;

    const categoryLabel = works[category].label;
    const work: any = works[category].projects.find((p: any) => p.id === id);
</script>

<!-- Page -->
{#if works}
<main class="page flex">
    
    <!-- Info -->
    <section class="w-[40%] h-full p-4 space-y-10 overflow-y-auto">
        <a href="/works">&larr; Back to Works</a>
        <header class="space-y-2">
            <h2 class="text-sm text-white/70 uppercase">{categoryLabel}</h2>
            <h1 class="section-label text-4xl">{work.name}</h1>
        </header>
        <a href={work.url} class="inline-block btn btn-hollow" target="_blank">Launch</a>
        <div>{@html work.details}</div>
    </section>

    <!-- Media -->
    <section class="w-[60%] h-full bg-black/20 border-l border-white/10 py-4 px-20 backdrop-blur-xl flex flex-col items-center space-y-10 overflow-y-auto">
        {#if work.screenshots.length === 0}<p>No screenshots available.</p>{/if}
        {#each work.screenshots as screenshot}
            <img src={screenshot} class="shadow-xl rounded-xl" alt="example">
        {/each}
    </section>

</main>
{/if}