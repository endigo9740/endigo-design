<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import { SpriteHandler } from '$util/SpriteHandler';
    import { World } from '$util/World';  
    import { Npc } from '$util/entities/Npc';  
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

    import Dialog from './Dialog.svelte';
    import { dialogStore } from '$lib/DialogStore';

    let elemCanvas: HTMLCanvasElement;

    // Loading
    let loadingAmount: number = 0;

    // Game
    let spriteHandler: SpriteHandler;
    let world: World;
        let npcOne: Npc;
        let npcTwo: Npc;
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
        ['overworld.png', 'ninja-green.json', 'ninja-red.json'].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => { loadingAmount = loader.progress; });
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
                npcOne = new Npc({
                    name: 'Green Ninja',
                    containerLevel,
                    portrait: 'ninja-green-portrait.png',
                    animSprite: spriteHandler.animSpriteSheet('ninja-green.json'),
                    x: 33, y: 18,
                    pathing: 'left-right',
                    dialog: `Hello, I'm the green ninja.`,
                });
                npcTwo = new Npc({
                    name: 'Red Ninja',
                    containerLevel,
                    portrait: 'ninja-red-portrait.png',
                    animSprite: spriteHandler.animSpriteSheet('ninja-red.json'),
                    x: 32, y: 20,
                    pathing: 'circle',
                    dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`
                });

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
                npcOne.render();
                npcTwo.render();
            });

        });
        
    });

    // UI Handlers
    function onCenterCamera(): void { camera.centerOnWorld(); }
</script>

<!-- Loading Text -->
{#if loadingAmount < 100}
<section class="fixed top-0 left-0 right-0 bottom-0 z-90 flex justify-center items-center">
    <h2>{loadingAmount.toFixed(0)}% Loaded...</h2>
</section>
{/if}

<!-- Overlay UI -->
{#if $dialogStore}

    <!-- Dialog -->
    <Dialog />

    {:else}

    <!-- HUD -->
    <header class="fixed top-0 left-0 z-10 bg-slate-900/90 px-8 py-4 rounded-br-xl" transition:fade>
        <small class="text-cyan-500">The portfolio of</small>
        <h3 class="uppercase">Chris Simmons</h3>
    </header>
    <nav class="fixed bottom-0 right-0 z-10 bg-slate-900/90 px-8 py-4 rounded-tl-xl space-x-4" transition:fade>
        <button type="button" class="btn-filled" on:click={() => {onCenterCamera()}}>Center</button>
    </nav>

{/if}

<!-- Game -->
<canvas id="game" bind:this={elemCanvas}></canvas>
