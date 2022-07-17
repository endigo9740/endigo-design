<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { onDestroy, onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // Entities Types
    import type { GameObject } from '$lib/game/objects/GameObject';
    import type { Pillar } from '$lib/game/objects/Pillar';
    import type { Monument } from '$lib/game/objects/Monument';

    // Entities
    import {
        // GameObjects
        npcsList, slimesList, crabsList, jellyfishList, frogsList,
        // Uniques
        fishList, catsList, birdsList,
        // Structures
        monumentsList, pillarsList
    } from '$lib/data/entity-list';

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
    let pillars: Pillar[] = [];
    let monuments: Monument[] = [];
    let npcs: GameObject[] = [];
    let critters: any = {
        // Game Objects
        slimes: [],
        crabs: [],
        jellyfish: [],
        frogs: [],
        // Unique
        fish: [],
        cats: [],
        birds: [], // keep last
    };

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
            'entities/pillar.json',
            'entities/monument.json',
            'entities/npcs/npc-chris.json',
            'entities/npcs/npc-melissa.json',
            'entities/critters/critter-bird.json',
            'entities/critters/critter-slime.json',
            'entities/critters/critter-layla.json',
            'entities/critters/critter-crab.json',
            'entities/critters/critter-jellyfish.json',
            'entities/critters/critter-frog.json',
            'entities/critters/critter-fish.json',
        ].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => { loading.amount = Math.ceil(loader.progress);  });
        game.loader.onError.add((loader, resources) => {
            console.error('Error: failed to load game', loader, resources);
            alert('Something went wrong when attempting to load the game site. Redirecting you to the traditional site instead. Sorry about that!');
            window.location.href = '/works'; // redirect
        });
        
        // On Game Loaded
        game.loader.load((loader, resources) => {
            // console.log('GAME LOADED');
            loading.complete = true;

            // Containers
            containerLevel = new PIXI.Container();

                // World
                world = new World({ texture: resources['overworld.png'].texture });
                containerLevel.addChild(world.sprite);


                // Camera
                camera = new Camera({ app: game, container: containerLevel });
                
                // Grid
                grid = new Grid({ container: containerLevel, enabled: false, coords: false, texture: resources['grid.png'].texture });

                // Instantiate GameObjects ---
                pillars = pillarsList({loader: game.loader});
                monuments = monumentsList({loader: game.loader});
                // NPCs
                npcs = npcsList({loader: game.loader});
                // Critters (GameObjects)
                critters.slimes = slimesList({loader: game.loader});
                critters.crabs = crabsList({loader: game.loader});
                critters.jellyfish = jellyfishList({loader: game.loader});
                critters.frogs = frogsList({loader: game.loader});
                // Critters (Unique)
                critters.cats = catsList({loader: game.loader, containerLevel, camera});
                critters.fish = fishList({loader: game.loader});
                critters.birds = birdsList({loader: game.loader}); // keep last

                // Add GameObject Containers to Level Container
                pillars.forEach((pillar: Pillar) => { containerLevel.addChild(pillar.container); })
                monuments.forEach((monument: Monument) => { containerLevel.addChild(monument.container); })
                // NPCs
                npcs.forEach((npc: GameObject) => { containerLevel.addChild(npc.container); })
                // Crittters
                Object.values(critters).forEach((critterArr: any) => {
                    critterArr.forEach((c: any) => { containerLevel.addChild(c.container); })
                });


            // Add to Stage
            game.stage.addChild(containerLevel);

            // On game launch, lock camera on Chris and start dialog.
            // cameraStore.set({type: 'entity', target: npcs[0], animate: false}); // npcs Chris
            cameraStore.set({type: 'entity', target: critters.frogs[0], animate: false}); // npcs Chris
            // setTimeout(() => { npcs[0].onPointerDown(); }, 1000);

            // Animation Loop
            let elapsed = 0.0;
            game.ticker.add((delta: any) => {
                elapsed += delta;

                // Move containerLevel based on camera position
                if (containerLevel.position.x !== camera.position.x) { containerLevel.position.x = camera.position.x };
                if (containerLevel.position.y !== camera.position.y) { containerLevel.position.y = camera.position.y };

                // Render GameObjects
                // NPCs
                npcs.forEach((npc: GameObject) => npc.render(elapsed));
                // Critters
                Object.values(critters).forEach((critterArr: any) => {
                    critterArr.forEach((c: any) => {
                        if (c.render) c.render(elapsed);
                    })
                });

                // Render Camera
                camera.render();
                
            });

        });
        
    });

    onDestroy(() => {
        // Helps memory leak issues
        if (game !== undefined) game.stop();
    });
</script>

<!-- Music -->
<audio bind:this={elemAudio} loop preload="auto" hidden>
    <source src="http://cdn.endigodesign.com.s3-us-east-2.amazonaws.com/endigo_design/portfolio/music.mp3" type="audio/mpeg">
</audio>

<!-- UI Overlay -->
{#if !loading.complete}
    <ProgressBar amount={loading.amount} />
    <div class="fixed top-0 left-0 right-0 bottom-0 z-10 bg-slate-900/70" transition:fade|local={{duration: 500}}></div>
{:else}
    {#if $dialogStore !== undefined}
        <Dialog />
    {:else if $pageModalStore !== undefined}
        <PageModal />
    {:else if $menuStore === true}
        <Menu {pillars} {npcs} cats={critters.cats} />
    {:else}
        <Hud {elemAudio} />
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
