<script lang="ts">
    import { fade } from 'svelte/transition';
    export let amount: number = 0;
</script>

<section class="fixed left-4 bottom-4 z-90 text-2xl font-bold" transition:fade|local={{duration: 250}}>{amount}%</section>