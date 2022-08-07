<script lang="ts">
    const socialLinks: any[] = [
        {name: 'Github', url: "https://github.com/endigo9740"},
        {name: 'LinkedIn', url: "https://www.linkedin.com/in/chris-simmons-8a523a23/"},
        {name: 'Twitter', url: "https://twitter.com/endigodesign"},
        {name: 'Blog', url: "https://dev.to/endigo9740"},
    ];
</script>

<footer class="flex justify-between items-center text-xs border-t border-slate-800 py-10">
    <nav class="grid grid-cols-4 gap-4">
        {#each socialLinks as site}
        <a href={site.url} target="_blank">{site.name}</a>
        {/each}
    </nav>
    <a href="mailto:gundamx9740@gmail.com">Email</a>
</footer>