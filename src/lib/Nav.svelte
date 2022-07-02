<script lang="ts">
    export let enabled: boolean = true;
</script>

{#if enabled}
<section class="sticky top-0 w-full z-10 bg-black/20 border-b border-white/10 p-4 flex justify-between items-center backdrop-blur-xl">
    <div class="flex space-x-4">
        <img src="portrait.png" class="ring-2 ring-white aspect-square w-[30px] rounded-full" alt="logo">
        <a href="/" class="text-white text-2xl font-bold uppercase">Chris Simmons</a>
    </div>
    <nav class="space-x-4 uppercase font-bold">
        <a href="/works">Works</a>
        <a href="/about">About</a>
        <!-- <a href="/blog">Blog</a> -->
    </nav>
</section>
{/if}