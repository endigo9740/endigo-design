<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { onMount } from 'svelte';
    import { World } from '$util/World';    
    import { Grid } from '$util/Grid';

    // Pixi Settings
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    // Vars
    let elemCanvas: any;
    
    onMount(() => {

        // Init Game App
        const game = new PIXI.Application({
            view: elemCanvas,
            resizeTo: window,
            backgroundColor: 0x141414
        });

        // Containers
        const containerMap = new PIXI.Container();
        
            // Generate Overworld Map
            const world = new World({ container: containerMap });
            world.generate();

            // Draw Grid
            const grid = new Grid({ container: containerMap });
            grid.drawGrid();

        // Add to Stage
        game.stage.addChild(containerMap);
        
    });
</script>

<div id="game">
    <canvas bind:this={elemCanvas}></canvas>
</div>