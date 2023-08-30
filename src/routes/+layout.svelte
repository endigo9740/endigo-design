<script lang="ts">
	import { initializeStores, autoModeWatcher, Modal } from '@skeletonlabs/skeleton';

	initializeStores();

	import '../app.postcss';
</script>

<!-- Set light/dark mode based on OS preference -->
<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>

<!-- Modals -->
<Modal />

<!-- Page Content -->
<slot />
