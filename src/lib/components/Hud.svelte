<script lang="ts">
import { onMount } from 'svelte';

    import { fly } from 'svelte/transition';

    export let camera: any;
    export let pillarList: any;
    export let npcList: any;

    // Camera Center on Target
    let selectedTarget: any;
    function centerOnContainer(): void {
        camera.centerOnContainer(selectedTarget);
    }

    // Music Player
    let elemAudio: HTMLAudioElement;
    let musicPlaying: boolean = false;
    onMount(() => {
        elemAudio.pause();
        elemAudio.volume = 0.5;
    });
    function onToggleMusic(): void {
        elemAudio.paused === true ? elemAudio.play() : elemAudio.pause();
        musicPlaying = !elemAudio.paused;
    }
</script>

<!-- Music -->
<audio bind:this={elemAudio} hidden autoplay loop preload="auto" class="fixed left-4 bottom-4 z-20">
    <source src="http://cdn.endigodesign.com.s3-us-east-2.amazonaws.com/endigo_design/portfolio/music.mp3" type="audio/mpeg">
</audio>

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

<!-- Controls -->
<nav class="fixed bottom-0 right-0 z-50 bg-slate-900/90 p-6 rounded-tl-xl space-x-4 backdrop-blur" transition:fly|local={{y: 100, duration: 250}}>

    <!-- Navigation -->
    {#if pillarList}
    <select name="selection" id="selection" class="max-w-[120px] text-center" bind:value={selectedTarget} on:change={() => {centerOnContainer()}}>
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

    <!-- Music Toggle -->
    <button type="button" class="btn-hollow" on:click={() => { onToggleMusic(); }}>
        <div class:animFloatSmall={musicPlaying}>♫</div>
    </button>

</nav>