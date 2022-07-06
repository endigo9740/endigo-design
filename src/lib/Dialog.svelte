<script lang="ts">
    import { fade } from 'svelte/transition';
    import { dialogStore } from "./DialogStore";

    function dismiss(): void { dialogStore.set(undefined) }
</script>

{#if $dialogStore}
<section class="fixed left-4 right-4 max-w-[1440px] mx-auto bottom-4 z-20 bg-slate-900/90 p-8 rounded-xl flex items-start space-x-8" transition:fade>

    <!-- Portrait -->
    <img src={$dialogStore.portrait} class="flex-none image-crisp w-16 h-16 md:w-[128px] md:h-[128px] bg-black border border-white rounded-xl" alt="portrait">

    <!-- Text -->
    <div class="flex-auto space-y-2">
        <h3>{$dialogStore.name}:</h3>
        <p>{$dialogStore.message}</p>
    </div>
    
    <!-- Actions -->
    <div class="flex-none">
        <button type="button" class="btn-filled" on:click={dismiss}>Gotcha</button>
    </div>
</section>
{/if}
