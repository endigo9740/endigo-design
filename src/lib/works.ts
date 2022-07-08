const testHtml: string = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet libero eu dolor pharetra volutpat ac et libero. Nunc finibus blandit pharetra. Nunc interdum dui ac orci pharetra, sit amet porta augue cursus. Nam sem odio, elementum at lacus vel, auctor ultrices ligula. Vestibulum dapibus metus enim, ac porta nibh molestie at. Cras luctus nisl lorem, vel porttitor tellus aliquam eget. Proin in bibendum diam, sed luctus neque. Nullam enim nibh, porta ullamcorper ipsum ac, semper laoreet arcu. Cras eu est magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi libero felis, iaculis non gravida ac, dignissim at nibh. Vivamus ac massa luctus orci scelerisque egestas quis non magna. Vestibulum eros velit, suscipit et tristique eu, fermentum ut diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mattis commodo vulputate. Donec sollicitudin ex purus.
</p>
<p>Phasellus sollicitudin mattis tempor. Integer rutrum erat elit, vel consectetur nibh congue id. Donec eu maximus dolor. Nullam nisl lorem, consectetur vel elit eget, malesuada laoreet nulla. Vestibulum lobortis purus at vestibulum laoreet. Vestibulum ipsum leo, ullamcorper ac congue fermentum, rutrum nec nunc. Duis leo neque, tempor nec dolor quis, placerat luctus justo. Nunc ultrices ex sed neque facilisis sagittis. Morbi sodales nec erat at consequat. Sed convallis ex velit, quis maximus tortor posuere in. Vestibulum iaculis risus maximus eros interdum, suscipit ultrices felis mattis. Etiam venenatis, nulla eu ornare imperdiet, leo leo scelerisque enim, ut pharetra odio tellus efficitur lectus. Nullam sit amet metus sed ipsum lacinia hendrerit. Fusce pellentesque hendrerit ipsum.</p>
`;

export const works: any = {

    "brain-&-bones": {
        label: "Brain & Bones",
        projects: [
            {
                id: "skeleton",
                name: "Skeleton",
                details: testHtml,
                url: 'https://skeleton.brainandbonesllc.com/',
                coords: {x: 15, y: 77},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "npc-skeleton-portrait.png",
                screenshots: [
                    {src: 'https://i.imgur.com/Pw8uHwB.png'},
                    {caption: 'Showing off a button component.', src: 'https://i.imgur.com/V5khBZZ.png'}
                ],
            },
            {
                id: "branding",
                name: "Branding & Identity",
                details: testHtml,
                url: null,
                coords: {x: 29, y: 101},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "helm",
                name: "The Helm",
                details: testHtml,
                url: null,
                coords: {x: 51, y: 90},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "speed-trivia",
                name: "Speed Trivia Branding",
                details: testHtml,
                url: null,
                coords: {x: 72, y: 111},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "speed-trivia-game",
                name: "Speed Trivia Game",
                details: testHtml,
                url: null,
                coords: {x: 113, y: 102},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
        ]
    },

    "jackpot-rising": {
        label: "Jackpot Rising",
        projects: [
            {
                id: "branding",
                name: "Branding & Identity",
                details: testHtml,
                url: null,
                coords: {x: 14, y: 36},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "overwolf",
                details: testHtml,
                url: null,
                name: "Overwolf",
                coords: {x: 43, y: 8},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "homebase",
                name: "Homebase",
                details: testHtml,
                url: null,
                coords: {x: 48, y: 31},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "playerhq",
                details: testHtml,
                url: null,
                name: "PlayerHQ",
                coords: {x: 81, y: 11},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "arcade",
                details: testHtml,
                url: null,
                name: "Arcade",
                coords: {x: 90, y: 37},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "speedleague",
                details: testHtml,
                url: null,
                name: "Speedleague",
                coords: {x: 113, y: 10},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
        ]
    },

    "gaming": {
        label: "Gaming",
        projects: [
            {
                id: "minirl",
                name: "Minirl",
                details: testHtml,
                url: null,
                coords: {x: 86, y: 69},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
            {
                id: "elden-ring-planner",
                name: "Elden Ring Planner",
                details: testHtml,
                url: null,
                coords: {x: 110, y: 56},
                accent: "rgba(0,0,0,0.5)",
                thumbnail: "",
                screenshots: [],
            },
        ]
    },
    
};