<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import { works } from "$lib/data/works";

    const navVisible: boolean = true;
    const worksArr: any[] = Object.entries(works);
</script>

<!-- Navigation -->
<Nav enabled={navVisible} />

<!-- Page -->
<main class="page">

        <!-- Wrap -->
        <div class="page-wrap space-y-20">

        <!-- Hero -->
        <header class="h-[250px] flex justify-center items-center">
            <div class="text-center space-y-2">
                <h1 class="text-9xl">Hi, I'm <span class="text-cyan-500">Chris</span></h1>
                <p class="font-bold translate-x-12">Developer, designer, UX, game maker, and more.</p>
            </div>
        </header>

        <!-- Works -->
        <section class="space-y-10">
            {#each worksArr as [key, work]}
                <div>
                    <!-- Label -->
                    <h2 class="text-cyan-500 uppercase pb-4 mb-4 border-b border-cyan-500">{work.label}</h2>
                    <!-- Projects Grid -->
                    <div class="grid grid-cols-3 gap-1">
                        <!-- Project -->
                        {#each work.projects as project}
                        <a href={`/${key}/${project.id}`} class="aspect-square flex justify-center items-center" style:background-color={project.accent}>
                            <span>{project.name}</span>
                        </a>
                        {/each}
                    </div>
                </div>
            {/each}
        </section>
        
        <!-- Footer -->
        <footer>
            <p>(footer)</p>
        </footer>

    </div>

</main>