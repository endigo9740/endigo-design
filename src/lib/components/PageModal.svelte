<script lang="ts">
    import { onMount } from "svelte";
    import { fade, scale } from 'svelte/transition';

    import { pageModalStore } from "../stores";

    import About from "$routes/about.svelte";
    import Work from "$routes/works/[category]/Embed.svelte";

    onMount(() => {
        document.addEventListener('keydown', (e: any) => {
            if (e.key === 'Escape'){ closeModal(); }
        });
    });

    function closeModal(): void { pageModalStore.set(undefined); }
</script>

{#if $pageModalStore !== undefined && $pageModalStore.hasOwnProperty('component')}
<section class="shim">

    <!-- Window -->
    <div
        class="bg-glass window w-[90%] h-full max-h-[85%] m-10 flex flex-col"
        transition:scale={{start: 0.5, duration: 300}}
    >

        <!-- Top Bar -->
        <header class="flex-none bg-black/50 p-4 flex justify-between items-center">
            <p class="text-xs uppercase">{$pageModalStore.component === 'Work' ? 'Project' : $pageModalStore.component}</p>
            <nav class="space-x-6">
                {#if $pageModalStore.component === 'Work'}
                <a href={`/works/${$pageModalStore.category}/${$pageModalStore.id}`} target="_blank">Full Page</a>
                {/if}
                <button type="button" class="btn-hollow" on:click={closeModal}>Close</button>
            </nav>
        </header>

        <!-- Content -->
        <div class="flex-auto overflow-hidden">
            {#if $pageModalStore.component === 'About'}
                <About compact={true} />
            {:else if $pageModalStore.component === 'Work'}
                <Work compact={true} category={$pageModalStore.category} id={$pageModalStore.id} />
            {:else}
                <p>(Invalid Page Settings)</p>
            {/if}
        </div>

    </div>

</section>
{/if}
