<script lang="ts">
	// Styles
	import '../theme-endigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	// Skeleton
	import { Modal, autoModeWatcher } from '@skeletonlabs/skeleton';
</script>

<!-- Set light/dark mode based on OS preference -->
<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>

<Modal />
<slot />
