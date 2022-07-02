<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({
        // @ts-ignore 
        params
    }) {
		return { props: {
            category: params.category,
            id: params.id,
        } };
	}
</script>
<script lang="ts">
    import { works } from '$lib/works';

	export let category: string;
	export let id: string;

    const workDetails: any = works[category].projects.find((p: any) => p.id === id);
    console.log(workDetails);
</script>

<!-- Page -->
<main class="page">

    <!-- Wrap -->
    <div class="page-wrap space-y-20">

        <a href="/works">&larr; Back</a>
        <pre>{JSON.stringify(workDetails, null, 2)}</pre>

    </div>

</main>
