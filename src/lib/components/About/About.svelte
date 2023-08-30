<script lang="ts">
	import ContactForm from '$lib/components/ContactForm/ContactForm.svelte';
</script>

<!-- Columns -->
<div class="lg:grid grid-cols-10 gap-10 mt-10 space-y-8 lg:space-y-0">
	<!-- Portrait -->
	<div class="col-span-2 flex flex-col items-center space-y-8">
		<img
			src="/entities/npcs/npc-chris-portrait.png"
			class="crisp bg-secondary-500 w-full max-w-[250px] aspect-square rounded-full shadow-xl"
			alt="portrait"
		/>
		<a href="http://bit.ly/1obS62s" class="inline-block btn variant-soft hover:variant-filled-primary" target="_blank" rel="noreferrer">
			View Resume
		</a>
	</div>

	<!-- Bio -->
	<section class="col-span-5 space-y-4">
		<h2 class="h2 section-header">About Chris</h2>
		<p>
			Hello and welcome! Here you’ll find a showcase of some of my most prominant works. I have dedicated the last 20+ years of my life to building a career in professional development, design, and UX. I am primarily self taught in these disciplines, but still take time to research, tinker, and learn more every day.
		</p>
		<p>
			I discovered my passion for programming and design while attending classes for Visual Basic and Photoshop in high school. However my
			love of gaming has been nearly ever present. Starting when I received my first console, a classic Nintendo Entertainment System, as a
			kid. I still remember the magic of picking up that controller and making Mario run and jump on the screen - though only occasionally
			to his untimely death.
		</p>
		<p>
			My passion has fueled a lifelong journey, culminating in a career path that includes a broad spectrum of industries. I've worked in photography, corporate media, a digital agency, a number of tech startups - all before landing in my current role as the core maintainer for <a class="anchor" href="https://skeleton.dev/" target="_blank" rel="noreferrer">Skeleton</a>, a UI toolkit for Svelte and Tailwind. I’ve had the privilege to work with extremely passionate and talented individuals, helping build major platforms and
			services for the web, gaming, and open source.
		</p>
		<p>
			I feel my strength lies not just in writing code or design UI, but in solving real world problems. I pride myself in my ability to
			listen, learn, and help determine what is really needed for any given challenge. Providing solutions at every step of the way, from concept to execution. Whether you’re trying to build a game, engage your audience, or carve a new path in the world. My skills are available to help get you to where you need to be!
		</p>
	</section>

	<!-- Contact -->
	<section class="col-span-3 space-y-8">
		<h2 class="h2 section-header">Reach Out</h2>
		<ContactForm />
	</section>
</div>
