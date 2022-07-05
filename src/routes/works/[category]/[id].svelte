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
<script lang=ts>
    import Details from './Work.svelte';
    export let category: string;
	export let id: string;
</script>

<Details {category} {id} />