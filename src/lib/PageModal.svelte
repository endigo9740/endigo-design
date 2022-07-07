<script lang="ts">
    import { onMount } from "svelte";
    import { fade, scale } from 'svelte/transition';

    import { pageModalStore } from "./PageModalStore";

    import About from "$routes/about.svelte";
    import Work from "$routes/works/[category]/Work.svelte";

    onMount(() => {
        document.addEventListener('keydown', (e: any) => {
            if (e.key === 'Escape'){ closeModal(); }
        });
    });

    function closeModal(): void { pageModalStore.set(undefined); }
</script>

{#if $pageModalStore !== undefined && $pageModalStore.hasOwnProperty('component')}
<!-- bg-black/30 -->
<!-- transition:fade={{duration: 150}} -->
<section class="fixed top-0 left-0 right-0 bottom-0 z-40  flex justify-center items-center" >

    <!-- Window -->
    <div
        class="w-[90%] h-full max-h-[85%] bg-slate-900/[0.96] border-2 border-black/30 rounded-xl shadow-2xl m-10 overflow-hidden"
        transition:scale={{start: 0.5, duration: 250}}
    >

        <header class="bg-black/50 p-4 flex justify-between items-center">
            <p class="text-xs uppercase">{$pageModalStore.component === 'Work' ? 'Project' : $pageModalStore.component}</p>
            <button type="button" class="btn-hollow" on:click={closeModal}>Close</button>
        </header>

        {#if $pageModalStore.component === 'About'}
            <About compact={true} />
        {:else if $pageModalStore.component === 'Work'}
            <Work compact={true} category={$pageModalStore.category} id={$pageModalStore.id} />
        {:else}
            <p>(Invalid Page Settings)</p>
        {/if}
    </div>

</section>
{/if}
