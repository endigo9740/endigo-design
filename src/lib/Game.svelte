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

    // Game
    let spriteHandler: SpriteHandler;
    let world: World;
        let npcOne: Npc;
        let npcTwo: Npc;
    let grid: Grid;
    let camera: Camera;
    let elapsed: number = 0.0;

    // Pathing
    let pathingLeftRight: any[] = [
        {path: 'right'},
        {path: 'wait', delay: 3000},
        {path: 'left'},
        {path: 'left'},
        {path: 'wait', delay: 3000},
        {path: 'right'},
    ];
    let pathingCircle: any[] = [
        {path: 'right'},
        {path: 'wait', delay: 4000},
        {path: 'down'},
        {path: 'wait', delay: 4000},
        {path: 'left'},
        {path: 'wait', delay: 4000},
        {path: 'up'},
        {path: 'wait', delay: 4000},
    ];

    onMount(() => {

        // Pixi.js Settings
        PIXI.settings.RESOLUTION = window.devicePixelRatio;
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        // Init Game App
        const game = new PIXI.Application({
            view: elemCanvas,
            resizeTo: window,
        });

        // Load Game Resources
        ['overworld.png', 'ninja-green.json', 'ninja-red.json'].forEach(r => { game.loader.add(r); });

        // On Game Loaded
        game.loader
            .load(() => {

                // Init Sprite Handler
                spriteHandler = new SpriteHandler({ loader: game.loader });

                // Containers
                const containerLevel = new PIXI.Container();
                
                    // Draw World
                    world = new World({ container: containerLevel });
                    world.generate();

                    // Create NPCs
                    npcOne = new Npc({
                        name: 'Green Ninja',
                        containerLevel,
                        portrait: 'ninja-green-portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('ninja-green.json'),
                        x: 33, y: 18,
                        paths: pathingLeftRight,
                        dialog: `Hello, I'm the green ninja.`,
                    });
                    npcTwo = new Npc({
                        name: 'Red Ninja',
                        containerLevel,
                        portrait: 'ninja-red-portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('ninja-red.json'),
                        x: 32, y: 20,
                        paths: pathingCircle,
                        dialog: `Hello, I'm the red ninja.`
                    });

                    // Draw Grid
                    grid = new Grid({ container: containerLevel, enabled: true, labeled: false });

                    // Handle Camera Panning
                    camera = new Camera({ app: game, container: containerLevel, world });
                    camera.init();

                // Add to Stage
                game.stage.addChild(containerLevel);

                // Animation Loop
                game.ticker.add((delta: any) => {
                    elapsed += delta;

                    // Move containerLevel based on camera position
                    containerLevel.position.x = camera.offset.x;
                    containerLevel.position.y = camera.offset.y;

                    // NPCs
                    npcOne.render();
                    npcTwo.render();
                });

            });
        
    });

    // UI Handlers
    function onCenterCamera(): void { camera.centerOnWorld(); }
</script>

<!-- Overlay UI -->
{#if $dialogStore}

    <!-- Dialog -->
    <Dialog />

    {:else}

    <!-- HUD -->
    <header class="fixed top-4 left-4 z-10 bg-slate-900/90 px-8 py-4 rounded-full" transition:fade>
        <h3 class="uppercase">Chris Simmons</h3>
    </header>
    <nav class="fixed bottom-4 right-4 z-10 space-x-4" transition:fade>
        <button type="button" on:click={onCenterCamera} class="bg-cyan-500 p-2">Center</button>
    </nav>

{/if}

<!-- Game -->
<canvas id="game" bind:this={elemCanvas}></canvas>