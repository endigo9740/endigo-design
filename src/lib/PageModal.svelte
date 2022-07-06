<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';

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
<section class="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/30 flex justify-center items-center" transition:fade={{duration: 150}}>

    <!-- TODO: improve position -->
    <!-- <button type="button" class="fixed top-4 right-4 btn-hollow" on:click={closeModal}>X</button> -->
    
    <!-- Window -->
    <div class="w-[90%] h-full max-h-[85%] bg-slate-900/[0.96] border border-white/20 rounded-xl shadow-2xl m-10 overflow-hidden">

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
