<script lang="ts">
    import Works from "$routes/works/index.svelte";
    import About from "$routes/about.svelte";
    import Details from "$routes/works/[category]/Details.svelte";
</script>

<section class="fixed top-0 left-0 right-0 bottom-0 z-40 flex justify-center items-center">
    
    <!-- Window -->
    <div class="w-[90%] max-h-[75%] bg-slate-900/[0.98] border border-white/20 rounded-xl shadow-2xl m-10 overflow-y-auto">
        <!-- <Works /> -->
        <!-- <About compact={true} /> -->
        <Details category='brain-and-bones' id="skeleton" />
    </div>

</section>