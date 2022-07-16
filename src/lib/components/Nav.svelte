<script lang="ts">
    import { page } from '$app/stores';
    import { writable, type Writable } from "svelte/store";
    import { afterNavigate } from '$app/navigation';

    export let enabled: boolean = true;
    
    const currentPageStore: Writable<string> = writable($page.url.pathname);
    const navigation: any = [
        {label: 'Works', href: '/works', target: null},
        {label: 'About', href: '/about', target: null},
    ];

    afterNavigate(() => { currentPageStore.set($page.url.pathname); });
</script>

{#if enabled}
<section class="sticky top-0 w-full z-10 bg-black/20 border-b border-white/10 p-4 py-6 flex justify-between items-center backdrop-blur-xl">
    <a href="/" class="flex items-center space-x-4">
        <img src="logo.png" class="w-[32px] h-[32px]" alt="logo">
        <span class="hidden md:block text-white font-bold uppercase">Endigo Design</span>
    </a>
    <nav class="space-x-6 uppercase font-bold">
        {#each navigation as link}
            <a
                href={link.href}
                target={link.target}
                class:active={$currentPageStore === link.href}
            >{link.label}</a>
        {/each}
    </nav>
</section>
{/if}

<style lang="postcss">
    .active { @apply text-white underline underline-offset-[7px] decoration-pink-500; }
</style>