<script lang="ts">
    export let enabled: boolean = true;
</script>

{#if enabled}
<footer class="flex justify-between text-xs border-t border-white/10 py-10">
    <a href="mailto:gundamx9740@gmail.com" class="btn btn-hollow">Hire Me</a>
    <nav class="flex justify-center items-center space-x-4">
        <a href="https://github.com/endigo9740" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/endigodesign" target="_blank">Twitter</a>
        <a href="https://medium.com/@endigo9740">Medium</a>
    </nav>
</footer>
{/if}