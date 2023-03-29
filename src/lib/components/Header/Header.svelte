<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Bar -->
<AppBar background="bg-white/20 dark:bg-black/20 backdrop-blur-xl border-b border-surface-500/25" class={$$props.class ?? ''}>
	<svelte:fragment slot="lead">
		<a href="/" class="flex items-center space-x-4">
			<img src="/images/logo.png" class="w-[32px] aspect-square" alt="logo" />
			<h1 class="hidden md:block !text-base uppercase">Endigo Design</h1>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a href="/works" class="btn hover:variant-filled-primary font-bold">Works</a>
		<a href="/about" class="btn hover:variant-filled-secondary font-bold">About</a>
		<!-- <LightSwitch /> -->
	</svelte:fragment>
</AppBar>
