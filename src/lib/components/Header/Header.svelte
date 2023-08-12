<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Bar -->
<AppBar
	background="bg-white/5 dark:bg-black/20 backdrop-blur-xl border-b border-surface-900/10 dark:border-surface-50/10"
	class={$$props.class ?? ''}
>
	<svelte:fragment slot="lead">
		<a href="/" class="flex items-center space-x-4">
			<img src="/images/logo.png" class="invert-[0.9] dark:invert-0 w-[32px] aspect-square" alt="logo" />
			<h1 class="hidden md:block !text-base uppercase">Become Human</h1>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a href="/works" class="btn hover:variant-filled-primary font-bold">Works</a>
		<a href="/about" class="btn hover:variant-filled-secondary font-bold">About</a>
	</svelte:fragment>
</AppBar>
