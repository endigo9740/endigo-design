<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { works } from "$lib/data/works";

    const navVisible: boolean = true;
    const worksArr: any[] = Object.entries(works);
</script>

<main class="page">

    <!-- Navigation -->
    <Nav enabled={navVisible} />

        <!-- Wrap -->
        <div class="page-wrap space-y-20">

        <!-- Hero -->
        <header class="flex justify-center items-center py-20">
            <div class="text-center space-y-2 drop-shadow-lg">
                <img src="logo.png" class="animFloat mx-auto" alt="logo">
                <h1 class="text-7xl md:text-9xl font-normal">Hi, I'm <span class="text-pink-500 font-bold">Chris</span></h1>
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
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
                        <!-- Project -->
                        {#each work.projects as project}
                            <a
                                href={`/works/${key}/${project.id}`}
                                class="bg-black aspect-square overflow-hidden shadow group"
                                style:background-color={project.accent}
                            >
                                <img class="cell group-hover:-translate-y-full" src={project.thumbnail} alt="thumbnail">
                                <div class="cell flex justify-center items-center group-hover:-translate-y-full cursor-pointer">
                                    <h6 class="drop-shadow-xl">{project.name}</h6>
                                </div>
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

<style lang="postcss">
    .cell { @apply w-full aspect-square transition-all duration-[150]; }
</style>