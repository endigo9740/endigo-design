<script lang="ts">
    import { fly } from 'svelte/transition';
    import { dialogStore } from "../stores";

    function dismiss(): void { dialogStore.set(undefined) }
</script>

{#if $dialogStore !== undefined}
<section class="bg-glass window fixed left-4 right-4 bottom-10 z-20 max-w-[1200px] mx-auto p-6 flex items-start space-x-8" transition:fly={{y: 500, duration: 150}}>

    <!-- Portrait -->
    <img src={$dialogStore.portrait} class="flex-none image-crisp w-16 md:w-[160px] -mt-14 aspect-square border border-white rounded-xl shadow-xl" alt="portrait">

    <!-- Text -->
    <div class="flex-auto space-y-6">
        <h3>{$dialogStore.name}</h3>
        <p class="text-xl">{@html $dialogStore.message}</p>
        <!-- Actions -->
        <nav>
            <button type="button" class="btn-hollow" on:click={dismiss}>Okay, got it!</button>
        </nav>
    </div>
    
</section>
{/if}
