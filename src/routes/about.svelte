<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    // Adjusts page layout for page modal
    export let compact: boolean = false;
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
                    <img src="portrait.png" class="w-full aspect-square rounded-full" alt="portrait"/>
                    <a href="http://bit.ly/1obS62s" class="inline-block btn btn-hollow" target="_blank">View Resume</a>
                </div>
                <!-- Details -->
                <div>
                    <p>Hello and welcome to my portfolio! Here you can find a showcase of some of my best work. I’m a seasoned developer, designer, and game maker and have been lucky enough to work in these fields professionally for a little over 20 years. My interests were sparked early, in high school, learning programming with Visual Basic, and creating graphics and posters using some of the earliest versions of Corel Paint and Photoshop. I’ve been a gamer even longer, receiving my first Nintendo (NES) console during Christmas as a kid. I fondly remember turning on Mario and just feeling like I was seeing something magic. Something fun and interactive that is totally new to me, but extremely exciting!</p>
                    <p>Many years later that spark is still there, and I still game, build, and design for fun in my free time. I’ve worked in a broad variety of industries, from photography, to a major corporate media office, to brief stint at a design agency. All before finding my niche in the startup world. I’ve had the privilege to work with some really talented and passionate individuals helping create platforms and services that meld the power of gaming with real world products that help customers of all types.
                    <p>I’m now looking for my next big thing, especially if it involves development and gaming! If you have a product or service that you think I might be a good fit for, please contact me and let me know how I can help. I look forward to hearing from you!</p>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section>
            <h2 class="section-label">Contact</h2>
            <ContactForm />
        </section>

        <!-- Footer -->
        <Footer enabled={!compact} />

    </div>

</main>