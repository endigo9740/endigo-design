<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { SpriteHandler } from '$util/SpriteHandler';
    import { World } from '$util/World';  
    import { Npc } from '$util/entities/Npc';  
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

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
                    npcOne = new Npc({ containerLevel, animSprite: spriteHandler.animSpriteSheet('ninja-green.json'), x: 33, y: 18, paths: pathingLeftRight});
                    npcTwo = new Npc({ containerLevel, animSprite: spriteHandler.animSpriteSheet('ninja-red.json'), x: 32, y: 20, paths: pathingCircle});

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
<header class="fixed top-4 left-4 bg-slate-900/80 px-8 py-4 rounded-full">
    <h3 class="uppercase">Chris Simmons</h3>
</header>
<nav class="fixed bottom-4 right-4 space-x-4">
    <button type="button" on:click={onCenterCamera} class="bg-cyan-500 p-2">Center</button>
</nav>

<!-- Game -->
<canvas id="game" bind:this={elemCanvas}></canvas>