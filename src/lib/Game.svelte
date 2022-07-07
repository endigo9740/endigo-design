<script lang="ts">
    import * as PIXI from 'pixi.js';

    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import Dialog from './Dialog.svelte';
    import { dialogStore } from '$lib/DialogStore';
    
    import PageModal from './PageModal.svelte';
    import { pageModalStore } from '$lib/PageModalStore';

    import { SpriteHandler } from '$util/SpriteHandler';
    import { World } from '$util/World';  
    import { Npc } from '$util/entities/Npc';  
    import { Pillar } from '$util/entities/Pillar';
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

    import { works } from '$lib/works';

    let elemCanvas: HTMLCanvasElement;

    // Loading
    let loadingComplete: boolean = false;
    let loadingAmount: number = 0;

    // Game
    let spriteHandler: SpriteHandler;
    let world: World;
        let npcs: any[] = [];
        let pillars: any[] = [];
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
            'pillar.json',
        ].forEach(r => { game.loader.add(r); });

        // Loading Lifecycle
        // https://pixijs.download/release/docs/PIXI.Loader.html
        game.loader.onProgress.add((loader, resources) => {
            loadingAmount = loader.progress;
            if (loadingAmount > 99) { loadingAmount = 100; }
        });
        game.loader.onError.add((loader, resources) => { window.location.href = '/works'; }); // redirect
        
        // On Game Loaded
        game.loader.load((loader, resources) => {
            // console.log('GAME LOADED');
            loadingComplete = true;

            // Init Sprite Handler
            spriteHandler = new SpriteHandler({ loader: game.loader });

            // Containers
            const containerLevel = new PIXI.Container();
            
                // World
                world = new World({ container: containerLevel, texture: resources['overworld.png'].texture });
                world.generate();

                // Camera
                camera = new Camera({ app: game, container: containerLevel, world });
                camera.init();
                
                // Grid
                grid = new Grid({ container: containerLevel, enabled: false, labeled: false });

                // Pillar
                pillars = [
                    // About
                    new Pillar({
                        name: 'Learn about Chris',
                        containerLevel,
                        camera,
                        animSprite: spriteHandler.animSpriteSheet('pillar.json'),
                        x: 63, y: 59,
                        page: { component: 'About' }
                    }),
                ];
                Object.entries(works).forEach((category: any) => {
                    const [categoryKey, categoryDetails] = category;
                    categoryDetails.projects.forEach((project: any) => {
                        if (!project.coords) return;
                        pillars.push(
                            new Pillar({
                                name: project.name,
                                containerLevel,
                                camera,
                                animSprite: spriteHandler.animSpriteSheet('pillar.json'),
                                x: project.coords.x, y: project.coords.y,
                                page: { component: 'Work', category: categoryKey, id: project.id }
                            }),
                        );
                    });
                });

                // NPCs
                npcs = [
                    new Npc({
                        name: 'Chris',
                        containerLevel,
                        camera,
                        portrait: 'portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('npc-chris.json'),
                        x: 64, y: 71,
                        pathing: 'idle',
                        dialog: `Hello, I'm the Chris. Welcome to my portfolio site! Have a look around. You may interact with ${pillars.length} pillars. Each pillar features one of my portfolio projects. Be sure to try the pillar near me as well. It will help you get to know me.`,
                    }),
                    new Npc({
                        name: 'Melissa',
                        containerLevel,
                        camera,
                        portrait: 'npc-melissa-portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('npc-melissa.json'),
                        x: 65, y: 73,
                        pathing: 'circle',
                        dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
                    }),
                    new Npc({
                        name: 'Skeleton',
                        containerLevel,
                        camera,
                        portrait: 'npc-skeleton-portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('npc-skeleton.json'),
                        x: 64, y: 70,
                        pathing: 'left-right',
                        dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
                    }),
                    new Npc({
                        name: 'Marcus',
                        containerLevel,
                        camera,
                        portrait: 'npc-marcus-portrait.png',
                        animSprite: spriteHandler.animSpriteSheet('npc-marcus.json'),
                        x: 65, y: 78,
                        pathing: 'up-down',
                        dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
                    }),
                ];

            // Add to Stage
            game.stage.addChild(containerLevel);

            // Post Staging
            camera.centerOnTarget(pillars[0])

            // Animation Loop
            game.ticker.add((delta: any) => {
                elapsed += delta;

                // Move containerLevel based on camera position
                if (containerLevel.position.x !== camera.offset.x) { containerLevel.position.x = camera.offset.x };
                if (containerLevel.position.y !== camera.offset.y) { containerLevel.position.y = camera.offset.y };

                // NPCs
                npcs.forEach(npc => npc.render());

                // Pillar
                pillars.forEach(pillar => pillar.render());
            });

        });
        
    });

    let selectedTarget: any;
    function centerOnTarget(): void { camera.centerOnTarget(selectedTarget); }
</script>

<!-- UI Overlay -->
{#if !loadingComplete}
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
        <a
            href="/"
            class="fixed top-0 left-0 z-10 bg-slate-900/90 p-6 rounded-br-xl flex space-x-4 backdrop-blur hover:bg-slate-800/90"
            transition:fly|local={{y: -100, duration: 250}}
            title="Go to homepage."
        >
            <img src="portrait.png" class="ring-2 ring-white aspect-square w-[30px] rounded-full" alt="logo">
            <span class="text-white text-2xl font-bold uppercase">Chris Simmons</span>
        </a>
        <nav class="fixed bottom-0 right-0 z-50 bg-slate-900/90 p-6 rounded-tl-xl space-x-4 backdrop-blur" transition:fly|local={{y: 100, duration: 250}}>
            <label for="selection">
                <span class="text-xs mr-4 opacity-30">Found</span>
                <select name="selection" id="selection" bind:value={selectedTarget} on:change={() => {centerOnTarget()}}>
                    <option disabled>Menu</option>
                    <optgroup label="Pillars">
                        {#each pillars as pillar, i}
                            <!-- {#if pillar.found} -->
                            <option value={pillar}>{pillar.page.category ? `${pillar.page.category} /` : ''} {pillar.name}</option>
                            <!-- {:else}
                            <option value={pillar}>Unactivated Pillar #{i+1}</option>
                            {/if} -->
                        {/each}
                    </optgroup>
                    <optgroup label="Characters">
                        {#each npcs as npc}
                        <option value={npc}>{npc.name}</option>
                        {/each}
                    </optgroup>
                </select>
            </label>
        </nav>
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
