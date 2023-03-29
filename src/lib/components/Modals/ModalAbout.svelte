<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import About from '../About/About.svelte';
	import Footer from '../Footer/Footer.svelte';
</script>

<ModalWrapper>
	<svelte:fragment slot="title">About</svelte:fragment>
	<div class="p-10 space-y-4">
		<About />
		<Footer />
	</div>
</ModalWrapper>
