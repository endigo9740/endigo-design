<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page}
	<div class="w-full h-full flex justify-center items-center">
		<div class="text-center space-y-4">
			<img src="/images/logo.png" class="invert-[0.9] dark:invert-0 animFloat w-[100px] md:w-auto mx-auto py-6" alt="logo" />
			<h2 class="h2">
				{$page.status}: {#if $page.error} {$page.error.message} {/if}
			</h2>
			<p>Sorry, something went wrong.</p>
			<a class="btn variant-filled" href="/">Return Home</a>
		</div>
	</div>
{/if}
