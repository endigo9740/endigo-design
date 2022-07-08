<script lang="ts">
    import { fly } from 'svelte/transition';
    import { dialogStore } from "../DialogStore";

    function dismiss(): void { dialogStore.set(undefined) }
</script>

{#if $dialogStore !== undefined}
<section
    class="fixed left-4 right-4 bottom-10 z-20 max-w-[1440px] mx-auto bg-slate-900/[0.9] backdrop-blur-sm border-2 border-black/30 p-8 rounded-xl flex items-start space-x-8"
    transition:fly={{y: 200, duration: 150}}
>

    <!-- Portrait -->
    <img src={$dialogStore.portrait} class="flex-none image-crisp w-16 h-16 md:w-[128px] md:h-[128px] bg-black border border-white rounded-xl" alt="portrait">

    <!-- Text -->
    <div class="flex-auto space-y-4">
        <h2>{$dialogStore.name}:</h2>
        <p class="text-2xl">{$dialogStore.message}</p>
        <!-- Actions -->
        <nav>
            <button type="button" class="btn-hollow" on:click={dismiss}>Okay, got it!</button>
        </nav>
    </div>
    
</section>
{/if}
