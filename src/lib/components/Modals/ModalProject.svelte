<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import Project from '../Project/Project.svelte';
	export let data: any = undefined;
</script>

<ModalWrapper>
	<svelte:fragment slot="title">{data.id.replaceAll('-', ' ')}</svelte:fragment>
	<Project embedded={true} {data} />
</ModalWrapper>
