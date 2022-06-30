<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { World } from '$util/World';    
    import { Input } from '$util/Input';
    import { Grid } from '$util/Grid';

    let elemCanvas: HTMLCanvasElement;
    
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
        
            // Generate Overworld Map
            const world = new World({ container: containerLevel });
            world.generate();

            // Handle Panning Input
            const panning = new Input({ app: game, container: containerLevel, world });
            panning.init();
            panning.cameraCenterOnWorld();

            // Draw Grid
            const grid = new Grid({ container: containerLevel, enabled: true, labeled: false });

        // Add to Stage
        game.stage.addChild(containerLevel);

        // Animation Loop
        let elapsed: number = 0.0;
        game.ticker.add((delta: any) => {
            elapsed += delta;
            // Set world container position
            containerLevel.position.x = panning.offset.x;
            containerLevel.position.y = panning.offset.y;
        });
        
    });
</script>

<canvas id="game" bind:this={elemCanvas}></canvas>