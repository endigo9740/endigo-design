<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // Data
    import { generateNpcs } from '$lib/data/npcs';
    import { generatePillars } from '$lib/data/pillars';

    // Types
    import type { Npc } from '$lib/game/objects/Npc';
    import type { Pillar } from '$lib/game/objects/Pillar';

    // Game Classes
    import { SpriteHandler } from '$lib/game/SpriteHandler';
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
    import { dialogStore, pageModalStore, menuStore } from '$lib/stores';

    let elemAudio: HTMLAudioElement;
    let elemCanvas: HTMLCanvasElement;
    const loading: any = {amount: 0, complete: false};

    // Game Elements
    let game: PIXI.Application;
    let spriteHandler: SpriteHandler;
    let world: World;
    let camera: Camera;
    let grid: Grid;
    let npcList: Npc[] = [];
    let pillarList: Pillar[] = [];

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
            backgroundColor: 0x141414
        });

        // Load Game Resources
        [
            'grid.png',
            'overworld.png',
            'npc-chris.json',
            'npc-melissa.json',
            'pillar.json',
        ].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => { loading.amount = Math.ceil(loader.progress);  });
        game.loader.onError.add((loader, resources) => { window.location.href = '/works'; }); // redirect
        
        // On Game Loaded
        game.loader.load((loader, resources) => {
            // console.log('GAME LOADED');
            loading.complete = true;

            // Init Sprite Handler
            spriteHandler = new SpriteHandler({ loader: game.loader });

            // Containers
            const containerLevel = new PIXI.Container();
            
                // World
                world = new World({ texture: resources['overworld.png'].texture });
                containerLevel.addChild(world.sprite);

                // Camera
                camera = new Camera({ app: game, container: containerLevel });
                
                // Grid
                grid = new Grid({ container: containerLevel, enabled: false, coords: false, texture: resources['grid.png'].texture });

                // GameObjects
                pillarList = generatePillars({ containerLevel, spriteHandler, camera });
                npcList = generateNpcs({ spriteHandler, containerLevel, camera });


            // Add to Stage
            game.stage.addChild(containerLevel);

            // Post Staging
            camera.centerOnContainer(npcList[0])

            // Animation Loop
            game.ticker.add((delta: any) => {

                // Move containerLevel based on camera position
                if (containerLevel.position.x !== camera.offset.x) { containerLevel.position.x = camera.offset.x };
                if (containerLevel.position.y !== camera.offset.y) { containerLevel.position.y = camera.offset.y };

                // Render GameObjects
                pillarList.forEach(pillar => pillar.render());
                npcList.forEach(npc => npc.render());
                
            });

        });
        
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
        <Menu {camera} {pillarList} {npcList} />
    {:else}
        <Hud {elemAudio} />
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
