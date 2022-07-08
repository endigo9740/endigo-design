<script lang="ts">
    import { fly } from 'svelte/transition';

    export let camera: any;
    export let pillarList: any;
    export let npcList: any;

    let selectedTarget: any;
    function centerOnTarget(): void { camera.centerOnTarget(selectedTarget); }
</script>

<!-- Branding -->
<a
    href="/"
    class="fixed top-0 left-0 z-10 bg-slate-900/90 p-6 rounded-br-xl flex items-center space-x-4 backdrop-blur hover:bg-slate-800/90"
    transition:fly|local={{y: -100, duration: 250}}
    title="Go to homepage."
>
    <img src="logo.png" class="w-[40px] h-[40px]" alt="logo">
    <div>
        <span class="block text-white text-2xl font-bold uppercase">Endigo Design</span>
        <span class="block text-xs opacity-70">The portfolio of Chris Simmons</span>
    </div>
</a>

<!-- Navigation -->
<nav class="fixed bottom-0 right-0 z-50 bg-slate-900/90 p-6 rounded-tl-xl space-x-4 backdrop-blur" transition:fly|local={{y: 100, duration: 250}}>
    <label for="selection">

        {#if pillarList}
        <select name="selection" id="selection" class="max-w-[120px] text-center" bind:value={selectedTarget} on:change={() => {centerOnTarget()}}>
            <option disabled>Navigate</option>
            <optgroup label="Pillars">
                {#each pillarList as pillar, i}
                    <!-- {#if pillar.found} -->
                    <option value={pillar}>{pillar.page.category ? `${pillar.page.category} /` : ''} {pillar.name}</option>
                    <!-- {:else}
                    <option value={pillar}>Unactivated Pillar #{i+1}</option>
                    {/if} -->
                {/each}
            </optgroup>
            <optgroup label="Characters">
                {#each npcList as npc}
                <option value={npc}>{npc.name}</option>
                {/each}
            </optgroup>
        </select>
        {/if}

    </label>
</nav>