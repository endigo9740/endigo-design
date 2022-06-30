<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { World } from '$util/World';  
    import { Person } from '$util/Person';  
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

    let elemCanvas: HTMLCanvasElement;

    let world: World;
        let npcOne: Person;
    let grid: Grid;
    let camera: Camera;
    let elapsed: number = 0.0;
    
    onMount(() => {

        // Pixi.js Settings
        PIXI.settings.RESOLUTION = window.devicePixelRatio;
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        // Init Game App
        const game = new PIXI.Application({
            view: elemCanvas,
            resizeTo: window,
        });

        // Containers
        const containerLevel = new PIXI.Container();
        
            // Draw World
            world = new World({ container: containerLevel });
            world.generate();

            // Draw NPCs
            npcOne = new Person({ container: containerLevel, x: 33, y: 18 });

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