<script lang="ts">
    import { fade } from 'svelte/transition';
    import { dialogStore } from "./DialogStore";

    const delay: number = 3000;
    let timeoutDialog: any;

    dialogStore.subscribe((ds: any) => {
        if (ds !== undefined) {
            clearTimeout(timeoutDialog);
            timeoutDialog = setTimeout(dismiss, delay);
        }
    });

    function dismiss(): void { dialogStore.set(undefined) }
</script>

{#if $dialogStore}
<section class="fixed left-4 right-4 max-w-[1440px] mx-auto bottom-4 z-20 bg-slate-900/90 p-8 rounded-xl flex items-start space-x-8" transition:fade on:click={dismiss}>
    <img src={$dialogStore.portrait} class="image-crisp w-16 h-16 md:w-[128px] md:h-[128px] bg-black border border-white rounded-xl" alt="portrait">
    <div class="space-y-2">
        <h3>{$dialogStore.name}:</h3>
        <p>{$dialogStore.message}</p>
    </div>
</section>
{/if}
