<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import Dialog from './Dialog.svelte';
    import { dialogStore } from '$lib/DialogStore';
    
    import PageModal from './PageModal.svelte';
    import { pageModalStore } from '$lib/PageModalStore';

    import { SpriteHandler } from '$util/SpriteHandler';
    import { World } from '$util/World';  
    import { Npc } from '$util/entities/Npc';  
    import { Terminal } from '$util/entities/Terminal';
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

    let elemCanvas: HTMLCanvasElement;

    // Loading
    let loadingAmount: number = 0;

    // Game
    let spriteHandler: SpriteHandler;
    let world: World;
        // let npcChris: Npc;
        // let npcMelissa: Npc;
        // let npcSkeleton: Npc;
        // let npcMarcus: Npc;
        let npcs: any[] = [];
        let terminals: any[] = [];
        // let terminalSkeleton: Terminal;
    let grid: Grid;
    let camera: Camera;
    let elapsed: number = 0.0;

    onMount(() => {

        // Pixi.js Settings
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        // Init Game App
        const game = new PIXI.Application({
            view: elemCanvas,
            resizeTo: document.body,
            backgroundColor: 0x141414
        });

        // Load Game Resources
        [
            'overworld.png',
            'npc-chris.json',
            'npc-melissa.json',
            'npc-skeleton.json',
            'npc-marcus.json',
            'terminal.json',
        ].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => {
            loadingAmount = loader.progress;
            if (loadingAmount > 99) { loadingAmount = 100; }
        });
        game.loader.onError.add((loader, resources) => { window.location.href = '/index-minimal'; }); // redirect
        
        // On Game Loaded
        game.loader.load((loader, resources) => {
            console.log('GAME LOADED');

            // Init Sprite Handler
            spriteHandler = new SpriteHandler({ loader: game.loader });

            // Containers
            const containerLevel = new PIXI.Container();
            
                // Draw World
                world = new World({ container: containerLevel, texture: resources['overworld.png'].texture });
                world.generate();

                // Create NPCs
                npcs = [
                    // new Npc({
                    //     name: 'Chris',
                    //     containerLevel,
                    //     portrait: 'portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-chris.json'),
                    //     x: 33, y: 34,
                    //     pathing: 'left-right',
                    //     dialog: `Hello, I'm the Chris. Welcome to my portfolio site! Have a look around. You may interact with several points of interest.`,
                    // }),
                    // new Npc({
                    //     name: 'Melissa',
                    //     containerLevel,
                    //     portrait: 'npc-melissa-portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-melissa.json'),
                    //     x: 12, y: 58,
                    //     pathing: 'circle',
                    //     dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`
                    // }),
                    // new Npc({
                    //     name: 'Skeleton',
                    //     containerLevel,
                    //     portrait: 'npc-skeleton-portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-skeleton.json'),
                    //     x: 36, y: 5,
                    //     pathing: 'left-right',
                    //     dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`
                    // }),
                    // new Npc({
                    //     name: 'Marcus',
                    //     containerLevel,
                    //     portrait: 'npc-marcus-portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-marcus.json'),
                    //     x: 9, y: 12,
                    //     pathing: 'up-down',
                    //     dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`
                    // }),
                ];

                // Draw Terminals
                terminals = [
                    // Brain & Bones
                    // new Terminal({
                    //     name: 'Skeleton',
                    //     containerLevel,
                    //     animSprite: spriteHandler.animSpriteSheet('terminal.json'),
                    //     x: 33, y: 31,
                    //     page: { component: 'Work', category: 'brain-and-bones', id: 'skeleton' }
                    // }),
                    // new Terminal({
                    //     name: 'Branding',
                    //     containerLevel,
                    //     animSprite: spriteHandler.animSpriteSheet('terminal.json'),
                    //     x: 4, y: 37,
                    //     page: { component: 'Work', category: 'brain-and-bones', id: 'branding' }
                    // }),
                ];

                // Draw Grid
                grid = new Grid({ container: containerLevel, enabled: false, labeled: false });

                // Handle Camera Panning
                camera = new Camera({ app: game, container: containerLevel, world });
                camera.init();

            // Add to Stage
            game.stage.addChild(containerLevel);

            // Animation Loop
            game.ticker.add((delta: any) => {
                elapsed += delta;

                // Move containerLevel based on camera position
                if (containerLevel.position.x !== camera.offset.x) { containerLevel.position.x = camera.offset.x };
                if (containerLevel.position.y !== camera.offset.y) { containerLevel.position.y = camera.offset.y };

                // NPCs
                npcs.forEach(npc => npc.render());

                // Terminals
                terminals.forEach(terminal => terminal.render());
            });

        });
        
    });

    function onUiCenter(): void { camera.centerOnWorld(); }
</script>

<!-- UI Overlay -->
{#if loadingAmount < 100}
<!-- Loading Text -->
    <section class="fixed top-0 left-0 right-0 bottom-0 z-90 flex justify-center items-center">
        <h2>{loadingAmount.toFixed(0)}% Loaded...</h2>
    </section>
{:else}
    {#if $dialogStore !== undefined}
        <!-- Dialog Modal -->
        <Dialog />
    {:else if $pageModalStore !== undefined}
        <!-- Page Modal -->
        <PageModal />
    {:else}
        <!-- HUD -->
        <a href="/" class="fixed top-0 left-0 z-10 bg-slate-900/90 p-6 rounded-br-xl flex space-x-4 backdrop-blur" transition:fade|local={{duration: 250}}>
            <img src="portrait.png" class="ring-2 ring-white aspect-square w-[30px] rounded-full" alt="logo">
            <span class="text-white text-2xl font-bold uppercase">Chris Simmons</span>
        </a>
        <nav class="fixed bottom-0 right-0 z-50 bg-slate-900/90 p-6 rounded-tl-xl space-x-4 backdrop-blur" transition:fade|local={{duration: 250}}>
            <button type="button" class="btn-filled" on:click={() => {onUiCenter()}}>Center</button>
        </nav>
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
