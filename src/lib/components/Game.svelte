<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { onDestroy, onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // Types
    import type { Pillar } from '$lib/game/objects/Pillar';
    import type { Bird } from '$lib/game/objects/Bird';
    import type { Npc } from '$lib/game/objects/Npc';

    // Data Lists
    import { pillarsList } from '$lib/data/pillars-list';
    import { npcsList } from '$lib/data/npcs-list';
    import { birdsList } from '$lib/data/birds-list';

    // Game Classes
    import { World } from '$lib/game/World';  
    import { Camera } from '$lib/game/Camera';
    import { Grid } from '$lib/game/Grid';

    // UI Components
    import ProgressBar from './ProgressBar.svelte';
    import Dialog from './Dialog.svelte';
    import PageModal from './PageModal.svelte';
    import Menu from './Menu.svelte';
    import Hud from './Hud.svelte';

    // Stores
    import { dialogStore, pageModalStore, menuStore, cameraStore } from '$lib/stores';

    let elemAudio: HTMLAudioElement;
    let elemCanvas: HTMLCanvasElement;
    const loading: any = {amount: 0, complete: false};

    // Game Elements
    let game: PIXI.Application;
    let containerLevel: PIXI.Container;
    let world: World;
    let camera: Camera;
    let grid: Grid;
    let pillarsArr: Pillar[] = [];
    let npcsListArr: Npc[] = [];
    let birdListArr: Bird[] = [];

    onMount(() => {

        // Audio
        elemAudio.pause();
        elemAudio.volume = 0.5;

        // Pixi.js Settings
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        // Init Game App
        game = new PIXI.Application({
            view: elemCanvas,
            resizeTo: document.body,
            backgroundColor: 0x141414,
        });
        if (game === null) return;

        // Load Game Resources
        [
            'grid.png',
            'overworld.png',
            'npc-chris.json',
            'npc-melissa.json',
            'pillar.json',
            'critter-bird.json',
        ].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => { loading.amount = Math.ceil(loader.progress);  });
        game.loader.onError.add((loader, resources) => { window.location.href = '/works'; }); // redirect
        
        // On Game Loaded
        game.loader.load((loader, resources) => {
            // console.log('GAME LOADED');
            loading.complete = true;

            // Containers
            containerLevel = new PIXI.Container();

                // World Singleton
                world = World.getInstance({ texture: resources['overworld.png'].texture });
                containerLevel.addChild(world.sprite);

                // Camera Singleton
                camera = Camera.getInstance({ app: game, container: containerLevel });
                
                // Grid Singleton
                grid = Grid.getInstance({ container: containerLevel, enabled: false, coords: false, texture: resources['grid.png'].texture });

                // Instantiate GameObjects
                pillarsArr = pillarsList({loader: game.loader});
                npcsListArr = npcsList({loader: game.loader});
                birdListArr = birdsList({loader: game.loader});

                // Add GameObjects to Level Container
                pillarsArr.forEach((pillar: Pillar) => { containerLevel.addChild(pillar.container); })
                npcsListArr.forEach((npc: Npc) => { containerLevel.addChild(npc.container); })
                birdListArr.forEach((bird: Bird) => { containerLevel.addChild(bird.container); })

            // Add to Stage
            game.stage.addChild(containerLevel);

            // Post Staging
            cameraStore.set({target: npcsListArr[0], animate: false});

            // Animation Loop
            game.ticker.add((delta: any) => {

                // Move containerLevel based on camera position
                if (containerLevel.position.x !== camera.position.x) { containerLevel.position.x = camera.position.x };
                if (containerLevel.position.y !== camera.position.y) { containerLevel.position.y = camera.position.y };

                // Render GameObjects
                birdListArr.forEach((bird: Bird) => { bird.render(); })
                npcsListArr.forEach((npc: Npc) => npc.render());

                // Render Camera
                camera.render();
                
            });

        });
        
    });

    onDestroy(() => {
        // Helps prevent slowdown from restarting/HMR
        if (game !== undefined) game.stop();
    });
</script>

<!-- Music -->
<audio bind:this={elemAudio} loop preload="auto" hidden>
    <source src="http://cdn.endigodesign.com.s3-us-east-2.amazonaws.com/endigo_design/portfolio/music.mp3" type="audio/mpeg">
</audio>

<!-- UI Overlay -->
{#if loading.complete === false}
    <ProgressBar amount={loading.amount} />
    <div class="fixed top-0 left-0 right-0 bottom-0 z-10 bg-slate-900" transition:fade|local={{duration: 1200}}></div>
{:else}
    {#if $dialogStore !== undefined}
        <Dialog />
    {:else if $pageModalStore !== undefined}
        <PageModal />
    {:else if $menuStore === true}
        <Menu {camera} pillarList={pillarsArr} npcList={npcsListArr} />
    {:else}
        <Hud {elemAudio} />
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
