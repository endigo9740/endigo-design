<script lang="ts">
	import { fade } from 'svelte/transition';
	export let amount: number = 0;
</script>

<section
	class="fixed z-50 w-full h-full flex justify-center items-center text-secondary-500 text-4xl font-bold"
	transition:fade|local={{ duration: 250 }}
>
	<h2>{amount || '1'}%</h2>
</section>
