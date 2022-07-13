<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    // Adjusts page layout for page modal
    export let compact: boolean = false;

    // Contact Sources
    const sources: any[] = [
        {name: 'Github', url: "https://github.com/endigo9740", color: '#333333'},
        {name: 'Twitter', url: "https://twitter.com/endigodesign", color: '#1da1f2'},
        {name: 'Medium', url: "https://medium.com/@endigo9740", color: '#00ab6c'},
        {name: 'LinkedIn', url: "https://www.linkedin.com/in/chris-simmons-8a523a23/", color: '#0077b5'},
    ];
</script>

<main class="page">
    
    <!-- Navigation -->
    <Nav enabled={!compact} />

    <!-- Wrap -->
    <div class="page-wrap space-y-20">

        <!-- Bio -->
        <section class="space-y-4">
            <h2 class="section-label">About Chris</h2>
            <div class="flex items-start space-x-10">
                <!-- Portrait -->
                <div class="flex-none w-[200px] text-center space-y-6">
                    <img src="entities/npcs/npc-chris-portrait.png" class="w-full aspect-square rounded-full shadow-xl" alt="portrait"/>
                    <a href="http://bit.ly/1obS62s" class="inline-block btn btn-hollow" target="_blank">View Resume</a>
                </div>
                <!-- Details -->
                <div>
                    <p>Hello and welcome to my portfolio! Here you can find a showcase of some of my best work. I’m a seasoned developer, designer, and game maker and have been lucky enough to work in these fields professionally for a little over 20 years. My interests were sparked early, in high school, learning programming with Visual Basic, and creating graphics and posters using some of the earliest versions of Corel Paint and Photoshop. I’ve been a gamer even longer, receiving my first Nintendo (NES) console during Christmas as a kid. I fondly remember turning on Mario and just feeling like I was seeing something magic. Something fun and interactive that was totally new but extremely exciting!</p>
                    <p>Many years later that spark is still there, and I still game, build, and design for fun in my free time. I’ve worked in a broad variety of industries, from photography, to a major corporate media office, to brief stint at a design agency. All before finding my niche in the startup world. I’ve had the privilege to work with some really talented and passionate individuals helping create platforms and services that meld the power of gaming with real products that help customers of all types.</p>
                    <p>My strengths are not just in knowing how to write code, or how to create appealing graphics, but in solving real world problems. Listening and learning what people really need, whether they know how to express it or not. Then deliver the best results and experience I can. If you’re trying to build a game, reach an audience, improve the UX of a service, or trot a new path in the software world, I can help!</p>
                    <p>I’m now looking for my next big thing, especially if it involves development and gaming! If you have a product or service that you think I might be a good fit for, please contact me and let me know how I can help. I look forward to hearing from you!</p>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section>
            <h2 class="section-label">Contact</h2>
            <div class="flex justify-center space-x-10">
                <div class="flex-auto">
                    <ContactForm />
                </div>
                <nav class="flex-none mt-8 space-y-6">
                    {#each sources as source}
                    <a href={source.url} target="_blank" class="block w-[250px] btn btn-hollow">{source.name}</a>
                    {/each}
                    <a href="mailto:gundamx9740@gmail.com" class="block w-[250px] btn btn-hollow text-cente">Email</a>
                </nav>
            </div>
        </section>

        <!-- Footer -->
        <Footer enabled={!compact} />

    </div>

</main>