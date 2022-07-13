<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { menuStore } from '$lib/stores';

    export let elemAudio: HTMLAudioElement;

    // Nav Menu
    function toggleMenu(): void { menuStore.set(true); }

    // Music
    let musicPlaying: boolean = false;
    onMount(() => { setPlayingState(); });
    function onToggleMusic(): void {
        elemAudio.paused === true ? elemAudio.play() : elemAudio.pause();
        setPlayingState();
    }
    function setPlayingState(): void { musicPlaying = !elemAudio.paused; }
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

<!-- Controls -->
<nav class="fixed bottom-0 right-0 z-50 bg-slate-900/90 p-6 rounded-tl-xl backdrop-blur space-x-4" transition:fly|local={{y: 100, duration: 250}}>

    <!-- Menu: Navigate -->
    <button type="button" class="btn-hollow" on:click={() => { toggleMenu(); }}>Navigate</button>

    <!-- Toggle Music -->
    <button type="button" class="btn-hollow" on:click={() => { onToggleMusic(); }}>
        <div class:animFloatSmall={musicPlaying}>♫</div>
    </button>

</nav>