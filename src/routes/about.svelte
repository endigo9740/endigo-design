<script lang="ts">
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";

    // Compact modal display for game
    export let compact: boolean = false;
</script>

<main class="page">
    
    <!-- Navigation -->
    <Nav enabled={!compact} />

    <!-- Wrap -->
    <div class="page-wrap space-y-20">

        <!-- Bio -->
        <section class="space-y-4">
            <h2 class="section-label">My Story</h2>
            <div class="flex items-start space-x-10">
                <!-- Portrait -->
                <img src="portrait.png" class="flex-none aspect-square w-[200px] rounded-full" alt="portrait"/>
                <!-- Details -->
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet libero eu dolor pharetra volutpat ac et libero. Nunc finibus blandit pharetra. Nunc interdum dui ac orci pharetra, sit amet porta augue cursus. Nam sem odio, elementum at lacus vel, auctor ultrices ligula. Vestibulum dapibus metus enim, ac porta nibh molestie at. Cras luctus nisl lorem, vel porttitor tellus aliquam eget. Proin in bibendum diam, sed luctus neque. Nullam enim nibh, porta ullamcorper ipsum ac, semper laoreet arcu. Cras eu est magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi libero felis, iaculis non gravida ac, dignissim at nibh. Vivamus ac massa luctus orci scelerisque egestas quis non magna. Vestibulum eros velit, suscipit et tristique eu, fermentum ut diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mattis commodo vulputate. Donec sollicitudin ex purus.
                    </p>
                    <p>Phasellus sollicitudin mattis tempor. Integer rutrum erat elit, vel consectetur nibh congue id. Donec eu maximus dolor. Nullam nisl lorem, consectetur vel elit eget, malesuada laoreet nulla. Vestibulum lobortis purus at vestibulum laoreet. Vestibulum ipsum leo, ullamcorper ac congue fermentum, rutrum nec nunc. Duis leo neque, tempor nec dolor quis, placerat luctus justo. Nunc ultrices ex sed neque facilisis sagittis. Morbi sodales nec erat at consequat. Sed convallis ex velit, quis maximus tortor posuere in. Vestibulum iaculis risus maximus eros interdum, suscipit ultrices felis mattis. Etiam venenatis, nulla eu ornare imperdiet, leo leo scelerisque enim, ut pharetra odio tellus efficitur lectus. Nullam sit amet metus sed ipsum lacinia hendrerit. Fusce pellentesque hendrerit ipsum.</p>
                    <p>Praesent mollis nisl at justo pharetra, quis elementum massa laoreet. Nulla sagittis nisi sed leo pharetra fringilla. Morbi malesuada placerat imperdiet. Morbi porttitor auctor quam non tristique. Etiam purus urna, laoreet nec gravida suscipit, pretium tempor sem. Nullam risus massa, facilisis et pellentesque quis, tempor at lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras nec placerat lorem. Curabitur ultrices mollis justo. Vivamus risus turpis, congue quis scelerisque nec, laoreet non libero. Fusce vitae porttitor sapien, nec ornare magna. Etiam non leo tempor sem placerat congue vitae a velit. Curabitur purus ex, consequat vel blandit quis, aliquam nec neque. Vestibulum eu turpis quam. Pellentesque mi massa, ornare vel libero quis, tincidunt ornare dui. Curabitur lectus elit, vehicula a dui et, dignissim lobortis ligula.</p>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section>
            <h2 class="section-label">Contact</h2>
            <p>Contact information coming soon.</p>
        </section>

        <!-- Footer -->
        <Footer enabled={!compact} />

    </div>

</main>