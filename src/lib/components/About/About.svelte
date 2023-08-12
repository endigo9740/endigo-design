<script lang="ts">
	import ContactForm from '$lib/components/ContactForm/ContactForm.svelte';
	import { RESUME_URL } from '$lib/constants';
</script>

<!-- Columns -->
<div class="lg:grid grid-cols-10 gap-10 mt-10 space-y-8 lg:space-y-0">
	<!-- Portrait -->
	<div class="col-span-2 flex flex-col items-center space-y-8">
		<img
			src="/entities/npcs/headshot.png"
			class="crisp bg-secondary-500 w-full max-w-[250px] aspect-square rounded-full shadow-xl"
			alt="portrait"
		/>
		<a href={RESUME_URL} class="inline-block btn variant-soft hover:variant-filled-primary" target="_blank">View Resume</a>
	</div>

	<!-- Bio -->
	<section class="col-span-5 space-y-4">
		<h2 class="section-header">About Ryan</h2>
		<p>
			Hello and welcome! Here you’ll find a showcase of some of my best work. I’m a seasoned developer, designer, and game maker, having
			worked professionally in these fields for the majority of the past 5 years. I’m primarily self taught in these disciplines, but still
			take time to research, tinker, and learn more every day.
		</p>
		<p>
			I feel my strength lies not just in writing code or design UI, but in solving real world problems. I pride myself in my ability to
			listen, learn, and determine what folks truly need. Providing solutions at every step of the way, from concept to execution. Whether
			you’re trying to build a game, engage an audience, or carve a new path in the software or gaming world. My skill and expertise are
			here to help!
		</p>
	</section>

	<!-- Contact -->
	<section class="col-span-3 space-y-8">
		<h2 class="section-header">Reach Out</h2>
		<ContactForm />
	</section>
</div>
