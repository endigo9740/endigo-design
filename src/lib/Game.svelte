<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { onMount } from 'svelte';

    // UI
    import ProgressBar from './ProgressBar.svelte';
    import Dialog from './Dialog.svelte';
    import { dialogStore } from '$lib/DialogStore';
    import PageModal from './PageModal.svelte';
    import { pageModalStore } from '$lib/PageModalStore';
    import Hud from './Hud.svelte';

    // Game Classes
    import { SpriteHandler } from '$util/SpriteHandler';
    import { World } from '$util/World';  
    import { Npc } from '$util/entities/Npc';  
    import { Pillar } from '$util/entities/Pillar';
    import { Camera } from '$util/Camera';
    import { Grid } from '$util/Grid';

    // Game Data
    import { works } from '$lib/works';

    let elemCanvas: HTMLCanvasElement;

    // Loading State
    const loading: any = {amount: 0, complete: false};

    // Game
    let game: PIXI.Application;
    let spriteHandler: SpriteHandler;
    let world: World;
    let camera: Camera;
    let grid: Grid;
    let npcs: any[] = [];
    let pillars: any[] = [];

    onMount(() => {

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
            'overworld.png',
            'npc-chris.json',
            'npc-melissa.json',
            'npc-skeleton.json',
            'npc-marcus.json',
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
                        x: 64, y: 68,
                        pathing: 'left-right',
                        dialog: `Hello, I'm the Chris. Welcome to my interactive portfolio gallery! Have a look around. Each pillar features information about me or one of my projects. Once activated you'll see the pillar come to life. Try the one just north of me to get started! You goal is to find all ${pillars.length} pillars. Good luck!`,
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
                    // new Npc({
                    //     name: 'Skeleton',
                    //     containerLevel,
                    //     camera,
                    //     portrait: 'npc-skeleton-portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-skeleton.json'),
                    //     x: 64, y: 70,
                    //     pathing: 'left-right',
                    //     dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
                    // }),
                    // new Npc({
                    //     name: 'Marcus',
                    //     containerLevel,
                    //     camera,
                    //     portrait: 'npc-marcus-portrait.png',
                    //     animSprite: spriteHandler.animSpriteSheet('npc-marcus.json'),
                    //     x: 65, y: 78,
                    //     pathing: 'up-down',
                    //     dialog: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nostrum iste odio magni adipisci ad dolore quaerat sint enim error laboriosam consequuntur soluta, labore quidem autem architecto, deserunt, corrupti qui!`,
                    // }),
                ];

            // Add to Stage
            game.stage.addChild(containerLevel);

            // Post Staging
            camera.centerOnTarget(npcs[0])

            // Animation Loop
            game.ticker.add((delta: any) => {

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
</script>

<!-- UI Overlay -->
{#if loading.complete === false}
    <ProgressBar amount={loading.amount} />
{:else}
    {#if $dialogStore !== undefined}
        <Dialog />
    {:else if $pageModalStore !== undefined}
        <PageModal />
    {:else}
        <Hud {camera} {pillars} {npcs} />
    {/if}
{/if}

<!-- Game Canvas -->
<canvas id="game" bind:this={elemCanvas}></canvas>
