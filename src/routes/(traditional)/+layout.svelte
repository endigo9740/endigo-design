<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<div class="h-screen w-screen overflow-y-auto">
	<Header class="sticky top-0 z-10" />
	<section class="container mx-auto p-4 md:p-10 space-y-4 md:space-y-10">
		<slot />
		<Footer />
	</section>
</div>
