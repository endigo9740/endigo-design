<script lang="ts">
    import { fade } from 'svelte/transition';
    import { dialogStore } from "./DialogStore";

    const timeout: number = 3000;
    dialogStore.subscribe((ds: any) => {
        if (ds !== undefined) { setTimeout(() => { dismiss(); }, timeout); }
    });

    function dismiss(): void {
        dialogStore.set(undefined)
    }
</script>

{#if $dialogStore}
<section class="fixed left-4 right-4 bottom-4 z-20 bg-slate-900/90 p-8 rounded-xl flex items-center space-x-8" transition:fade on:click={dismiss}>
    <img src={$dialogStore.portrait} class="image-crisp w-[128px] h-[128px] bg-black border border-white rounded-xl" alt="portrait">
    <div class="space-y-2">
        <h3>{$dialogStore.name}:</h3>
        <p>{$dialogStore.message}</p>
    </div>
</section>
{/if}