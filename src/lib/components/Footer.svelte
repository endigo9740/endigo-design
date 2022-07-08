<script lang="ts">
    export let enabled: boolean = true;
</script>

{#if enabled}
<footer class="flex justify-between text-xs border-t border-white/10 py-10">
    <a href="/">Contact Me</a>
    <nav class="flex justify-center items-center space-x-4">
        <a href="/">Github</a>
        <a href="/">LinkedIn</a>
        <a href="/">Twitter</a>
    </nav>
</footer>
{/if}