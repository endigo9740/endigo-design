<script lang="ts">
    export let enabled: boolean = true;
</script>

{#if enabled}
<section class="sticky top-0 w-full z-10 bg-black/20 border-b border-white/10 p-4 flex justify-between items-center backdrop-blur-xl">
    <a href="/" class="flex space-x-4">
        <span class="block text-white font-bold uppercase">Endigo Design</span>
    </a>
    <nav class="space-x-4 uppercase font-bold">
        <a href="/works">Works</a>
        <a href="/about">About</a>
        <!-- <a href="/blog">Blog</a> -->
    </nav>
</section>
{/if}