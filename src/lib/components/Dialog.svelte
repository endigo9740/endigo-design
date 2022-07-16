<script lang="ts">
    import { fly } from 'svelte/transition';
    import { dialogStore } from "../stores";

    function dismiss(): void { dialogStore.set(undefined) }
</script>

{#if $dialogStore !== undefined}
<!-- bg-glass window fixed left-4 right-4 bottom-10 z-20 max-w-[1200px] mx-auto p-6 md:flex items-center space-x-8 -->
<section
    class="bg-glass window fixed left-4 right-4 bottom-4 max-w-[1200px] mx-auto md:grid grid-cols-5 gap-8 p-4 space-y-4 md:space-y-0"
    transition:fly={{y: 500, duration: 150}}
>

    <!-- Portrait -->
    <!-- flex-none crisp w-16 md:w-[160px] -mt-14 aspect-square border border-white rounded-xl shadow-xl -->
    <div class="col-span-1 flex justify-center items-center">
        <img src={$dialogStore.portrait} class="crisp border-4 border-white w-[200px] rounded-xl shadow-xl md:-translate-y-8" alt="portrait">
    </div>

    <!-- Text -->
    <!-- flex-auto space-y-2 -->
    <div class="col-span-3 space-y-4">
        <h3>{$dialogStore.name}</h3>
        <p class="text-lg md:text-xl">{@html $dialogStore.message}</p>
    </div>

    <!-- Actions -->
    <!-- space-y-4 -->
    <nav class="col-span-1 flex justify-center items-center">
        <button type="button" class="btn-hollow" on:click={dismiss}>Okay, got it!</button>
    </nav>
    
</section>
{/if}
