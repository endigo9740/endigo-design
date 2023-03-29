<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	// Components
	import Project from '$lib/components/Project/Project.svelte';
</script>

<Project {data} />
