<script lang="ts">
    import { onMount } from "svelte";
    import { scale } from 'svelte/transition';

    import { pageModalStore } from "../stores";

    import About from "$routes/about.svelte";
    import Work from "$routes/works/[category]/Embed.svelte";


    let copyMessage = 'Copy URL';
    function onCopyUrl(): void {
        const urlText: string = `https://endigodesign.com/works/${$pageModalStore.category}/${$pageModalStore.id}`;
        navigator.clipboard.writeText(urlText).then(() => {
            copyMessage = '👍 Copied!';
            setTimeout(() => { copyMessage = 'Copy URL'; }, 3000);
        });
    }

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
    <div class="bg-glass window w-full h-full flex flex-col max-w-[1920px]" transition:scale={{start: 0.75, duration: 300}}>

        <!-- Top Bar -->
        <header class="flex-none bg-black/50 p-4 flex justify-between items-center">
            <p class="text-xs uppercase">{$pageModalStore.component === 'Work' ? 'Project' : $pageModalStore.component}</p>
            <nav class="space-x-6">
                {#if $pageModalStore.component === 'Work'}
                <button type="button" class="opacity-60" on:click={() => { onCopyUrl(); }}>{copyMessage}</button>
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
