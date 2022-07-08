<script lang="ts">
    import { menuStore } from '$lib/stores';

    export let camera: any;
    export let pillarList: any;
    export let npcList: any;

    function centerOnContainer(target: any): void {
        camera.centerOnContainer(target);
        close();
    }

    function close(): void {
        menuStore.set(false);
    }
</script>

{#if pillarList}
<section class="shim">

    <!-- Window -->
    <div class="bg-glass window w-[80%] max-h-[85%] flex flex-col">

        <!-- Top Bar -->
        <header class="flex-none bg-black/50 p-4 flex justify-between items-center">
            <p class="text-xs uppercase">Navigation</p>
            <button type="button" class="btn-hollow" on:click={close}>Close</button>
        </header>

        <!-- Content -->
        <div class="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
        
            <!-- Characters -->
            <div class="space-y-4">
                <h4 class="section-label !mb-0">Characters</h4>
                <p>Select a character jump direction to them.</p>
                <nav class="grid grid-cols-2 gap-1">
                    {#each npcList as npc}
                    <li class="bg-black/50 text-xs p-4 flex flex-col items-center cursor-pointer hover:bg-white/20" on:click={()=>{centerOnContainer(npc)}}>
                        <img src={npc.portrait} class="w-full aspect-square rounded-xl" alt="portrait">
                        <h6 class="mt-2">{npc.name}</h6>
                    </li>
                    {/each}
                </nav>
            </div>

            <!-- Pillars -->
            <div class="space-y-4">
                <h4 class="section-label !mb-0">Pillars</h4>
                <p>Your goal is to unlock all pillars!</p>
                <nav class="grid grid-cols-2 gap-4">
                    {#each pillarList as pillar, i}
                    <li class="bg-black/50 text-xs px-4 py-2 flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-white/20" on:click={()=>{centerOnContainer(pillar)}}>
                        <img src="pillar-thumbnail.png" class="w-10 aspect-square rounded-xl my-2" alt="portrait">
                        <div class="flex-auto space-y-1">
                            <p class="text-xs capitalize">{pillar.page.category.replaceAll('-',' ') || ''}</p>
                            <span class="block text-base font-bold">{pillar.name}</span>
                        </div>
                        {#if pillar.found}
                        <div class="font-bold text-emerald-500 uppercase">Active</div>
                        {/if}
                    </li>
                    {/each}
                </nav>
            </div>

        </div>

    </div>

</section>
{/if}