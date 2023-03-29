<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import Menu from '$lib/game/components/Menu/Menu.svelte';
</script>

<ModalWrapper>
	<svelte:fragment slot="title">Navigate</svelte:fragment>
	<Menu />
</ModalWrapper>
