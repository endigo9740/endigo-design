<script lang="ts">
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    import { works } from "$lib/works";

    const navVisible: boolean = true;
    const worksArr: any[] = Object.entries(works);
</script>

<main class="page">

    <!-- Navigation -->
    <Nav enabled={navVisible} />

        <!-- Wrap -->
        <div class="page-wrap space-y-20">

        <!-- Hero -->
        <header class="h-[250px] flex justify-center items-center">
            <div class="text-center space-y-2">
                <h1 class="text-7xl md:text-9xl drop-shadow-xl">Hi, I'm <span class="text-cyan-500">Chris</span></h1>
                <p class="text-xs md:text-lg text-white/50 font-bold drop-shadow-xl md:translate-x-12">Developer, designer, UX, game maker, and more.</p>
            </div>
        </header>

        <!-- Works -->
        <section class="space-y-10">
            {#each worksArr as [key, work]}
                <div>
                    <!-- Label -->
                    <h2 class="section-label">{work.label}</h2>
                    <!-- Projects Grid -->
                    <div class="grid grid-cols-3 gap-1">
                        <!-- Project -->
                        {#each work.projects as project}
                        <a href={`/works/${key}/${project.id}`} class="aspect-square flex justify-center items-center" style:background-color={project.accent}>
                            {#if project.thumbnail}
                            <div class="flex flex-col items-center space-y-4">
                                <img src={project.thumbnail} class="image-crisp w-[200%] h-[200%]" alt="thumbnail">
                                <span>{project.name}</span>
                            </div>
                            {:else}
                            <span>{project.name}</span>
                            {/if}
                        </a>
                        {/each}
                    </div>
                </div>
            {/each}
        </section>
        
        <!-- Footer -->
        <Footer />

    </div>

</main>