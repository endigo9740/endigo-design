<script lang="ts">
    export let enabled: boolean = true;
</script>

{#if enabled}
<footer class="flex justify-between items-center text-xs border-t border-slate-800 py-10">
    <span class="opacity-30">All rights reserved.</span>
    <a href="mailto:gundamx9740@gmail.com" class="btn btn-hollow">Reach Out</a>
</footer>
{/if}