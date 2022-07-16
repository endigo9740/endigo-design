<script lang="ts">
    export let enabled: boolean = true;

    // Social Links
    const socialLinks: any[] = [
        {name: 'Github', url: "https://github.com/endigo9740", color: '#333333'},
        {name: 'LinkedIn', url: "https://www.linkedin.com/in/chris-simmons-8a523a23/", color: '#0077b5'},
        {name: 'Twitter', url: "https://twitter.com/endigodesign", color: '#1da1f2'},
        {name: 'Medium', url: "https://medium.com/@endigo9740", color: '#00ab6c'},
    ];
</script>

{#if enabled}
<footer class="flex justify-between items-center text-xs border-t border-slate-800 py-10">
    <nav class="grid grid-cols-4 gap-4">
        {#each socialLinks as site}
        <a href={site.url} target="_blank">{site.name}</a>
        {/each}
    </nav>
    <a href="mailto:gundamx9740@gmail.com" class="btn btn-hollow">Email Me</a>
</footer>
{/if}