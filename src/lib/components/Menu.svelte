<script lang="ts">
    import { menuStore, cameraStore, tile } from '$lib/stores';
    import { works } from '$lib/data/works';

    import Map from './Map.svelte';

    export let pillars: any;
    export let npcs: any;

    const worksArr: any[] = Object.values(works);

    function navigateToNpc(target: any): void {
        cameraStore.set({type: 'entity', target, animate: true});
        close();
    }

    function naviateToPillar(project: any): void {
        cameraStore.set({
            type: 'coords',
            x: project.coords.x,
            y: project.coords.y + 2, // pillar base
            targetHeight: 1,
            targetWidth: 1,
            animate: true
        });
        close();
    }

    function close(): void {
        menuStore.set(false);
    }
</script>

<section class="shim !p-4 lg:!p-8">

    <!-- Window -->
    <div class="bg-glass window w-full h-full flex flex-col overflow-hidden">

        <!-- Header -->
        <header class="flex-none bg-black/50 p-4 flex justify-between items-center">
            <p class="text-xs uppercase">Menu</p>
            <button type="button" class="btn-hollow" on:click={close}>Close</button>
        </header>

        <!-- Body -->
        <div class="flex-auto block lg:flex overflow-auto lg:overflow-hidden">

            <!-- Map -->
            <div class="flex-none lg:flex-[50%] bg-black/30 border-r border-white/10 p-4 flex items-center">
                <Map {pillars} {npcs} />
            </div>

            <!-- Points of Interest -->
            <div class="flex-none lg:flex-[50%] p-4 overflow-x-auto space-y-8">

                <!-- People -->
                <section class="space-y-4">
                    <h2 class="text-cyan-500">People</h2>
                    <p>Chat with Chris or a few people he's worked with over the years.</p>
                    <nav class="grid grid-cols-4 gap-2">
                        {#each npcs as npc}
                        <li
                            class="bg-black/30 text-xs p-1 flex flex-col items-center rounded cursor-pointer hover:bg-cyan-500"
                            on:click={()=>{navigateToNpc(npc)}}
                        >
                            <img src={npc.portrait} class="w-full aspect-square rounded" alt="portrait">
                            <h6 class="mt-3 mb-2">{npc.name}</h6>
                        </li>
                        {/each}
                    </nav>
                </section>

                <!-- Pillars -->
                <section class="space-y-4">
                    <h2 class="text-pink-500">Pillars</h2>
                    <p>Each represents a project Chris has created or contributed to.</p>
                    <!-- Per Each Category -->
                    {#each Object.values(worksArr) as category, i}
                        <h4>{category.label}</h4>
                        <nav class="list-none grid grid-cols-2 gap-4">
                            <!-- Per Each Project -->
                            {#each category.projects as project}
                            <li
                                class="bg-black/30 p-1 rounded cursor-pointer flex items-center space-x-4 group hover:bg-pink-500"
                                on:click={()=>{naviateToPillar(project)}}
                            >
                                <img src={`../../${project.thumbnail}`} class="w-[64px] aspect-square rounded group-hover:grayscale group-hover:contrast-120" style:background-color={project.accent} alt="thumbnail">
                                <span class="text-base font-bold">{project.name}</span>
                                <!-- TODO: need to cross reference 'pillars' data -->
                                <!-- {#if pillar.found}<div class="font-bold uppercase">Found</div>{/if} -->
                            </li>
                            {/each}
                        </nav>
                    {/each}
                </section>


            </div>

        </div>

    </div>

</section>
