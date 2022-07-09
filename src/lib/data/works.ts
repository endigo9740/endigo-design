const testHtml: string = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet libero eu dolor pharetra volutpat ac et libero. Nunc finibus blandit pharetra. Nunc interdum dui ac orci pharetra, sit amet porta augue cursus. Nam sem odio, elementum at lacus vel, auctor ultrices ligula. Vestibulum dapibus metus enim, ac porta nibh molestie at. Cras luctus nisl lorem, vel porttitor tellus aliquam eget. Proin in bibendum diam, sed luctus neque. Nullam enim nibh, porta ullamcorper ipsum ac, semper laoreet arcu. Cras eu est magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi libero felis, iaculis non gravida ac, dignissim at nibh. Vivamus ac massa luctus orci scelerisque egestas quis non magna. Vestibulum eros velit, suscipit et tristique eu, fermentum ut diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mattis commodo vulputate. Donec sollicitudin ex purus.
</p>
<p>Phasellus sollicitudin mattis tempor. Integer rutrum erat elit, vel consectetur nibh congue id. Donec eu maximus dolor. Nullam nisl lorem, consectetur vel elit eget, malesuada laoreet nulla. Vestibulum lobortis purus at vestibulum laoreet. Vestibulum ipsum leo, ullamcorper ac congue fermentum, rutrum nec nunc. Duis leo neque, tempor nec dolor quis, placerat luctus justo. Nunc ultrices ex sed neque facilisis sagittis. Morbi sodales nec erat at consequat. Sed convallis ex velit, quis maximus tortor posuere in. Vestibulum iaculis risus maximus eros interdum, suscipit ultrices felis mattis. Etiam venenatis, nulla eu ornare imperdiet, leo leo scelerisque enim, ut pharetra odio tellus efficitur lectus. Nullam sit amet metus sed ipsum lacinia hendrerit. Fusce pellentesque hendrerit ipsum.</p>
</p>
`;

const baseUrl: string = `https://endigodesign.com`;

export const works: any = {

    'brain-&-bones': {
        label: 'Brain & Bones',
        projects: [
            {
                id: 'skeleton',
                name: 'Skeleton',
                details: [
                    'A fully-featured Svelte UI component library featuring tight integration of Tailwind and its conventions, Skeleton was originally created for internal uses at Brain & Bones during our migration from Angular to Svelte. I realized it would be a net positive to open source the project to the community. As such, we’re aiming to release and allow open contributions soon. The library provides a host of fully-featured components, and supports both themes and dark mode. Skeleton was originally inspired by component libraries such as Mantine in the React ecosystem.'
                ],
                technology: `Svelte/Kit, Tailwind, Vite, Typescript, Vitest/Testing Library, Highlight.js`,
                url: 'https://skeleton.brainandbonesllc.com/',
                coords: {x: 15, y: 77},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [
                    {src: 'https://i.imgur.com/Pw8uHwB.png'},
                    {caption: 'Showing off a button component.', src: 'https://i.imgur.com/V5khBZZ.png'}
                ],
            },
            {
                id: 'branding',
                name: 'Branding & Identity',
                details: [
                    'Over the course of two years, I was the lead on all branding, marketing, and development at Brain & Bones. This included multiple web apps and services, various marketing initiatives, as well as establishing the complete brand guidelines and visual identity for both the company and their products.'
                ],
                technology: 'Svelte/Kit (website), Sketch (UI/UX), Notion (Guidelines)',
                url: 'https://www.brainandbonesllc.com/',
                coords: {x: 29, y: 101},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [],
            },
            {
                id: 'helm',
                name: 'The Helm',
                details: [
                    'The customer-facing web product for the Brain & Bones platform, the Helm allows clients to manage games, tournaments, and monitor game usage and engagement within their organization. I directed all key initiatives of the project, from concept to launch. This included designing and implementing the entirety of the frontend client, providing requirements and assisting our backend developers with architecting the API and data flow, and fielding testing alongside our primary QA engineer.'
                ],
                technology: 'Angular, Angular Material, RxJS, Typescript, Chart.js, Moment',
                url: 'https://admin.speedtriviagame.com/',
                coords: {x: 51, y: 90},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [],
            },
            {
                id: 'speed-trivia',
                name: 'Speed Trivia Branding',
                details: [
                    'One of my core responsibilities at Brain & Bones was designing and implementing various products, websites, services, and marketing materials. This included the brand guidelines, logo, color palette, and other visual elements for Speed Trivia.'
                ],
                technology: 'Svelte/Kit (website), Sketch (UI/UX), Notion (Guidelines)',
                url: 'https://www.speedtriviagame.com/',
                coords: {x: 72, y: 111},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [],
            },
            {
                id: 'speed-trivia-game',
                name: 'Speed Trivia Game',
                details: [
                    `Speed Trivia was the first in the series of planned games for the Brain & Bones engagement platform. It harnessed the popularity of casual games to allow companies and individuals to connect with their customers, followers, and employees. This was the first project I spearheaded during my time at Brain & Bones. The product is a fully interactive web-based game, featuring fast paced trivia and leaderboards. It was built completely from the ground up using modern web technology. It's a fully responsive PWA that works on any web-connected device.`
                ],
                technology: 'Angular, Angular Material, RxJS, Typescript, Moment, Anime.js',
                url: 'https://game.speedtriviagame.com/g/Ke2rvMJo68',
                coords: {x: 113, y: 102},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [],
            },
        ]
    },

    'jackpot-rising': {
        label: 'Jackpot Rising',
        projects: [
            {
                id: 'branding',
                name: 'Branding & Identity',
                details: [
                    'Jackpot Rising was a tournament platform that integrated into games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
                ],
                technology: 'Sketch, Photoshop, Angular (website)',
                url: null,
                coords: {x: 14, y: 36},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [
                    {src: 'https://www.youtube.com/embed/0ah2zZQ6xHc'}
                ],
                screenshots: [
                    {src: baseUrl+'/img/projects/jr_brand/001.png', caption: 'The comapny website'},
                    {src: baseUrl+'/img/projects/jr_brand/002.png', caption: 'The Jackpot Rising logo and brand colors'},
                    {src: baseUrl+'/img/projects/jr_brand/006.jpg', caption: 'Branded shirts for staff'}
                ],
            },
            {
                id: 'overwolf',
                name: 'Overwolf',
                details: [
                    'Overwolf provides a middleware solution for tracking game metrics (score, kills, etc.) in real-time for multiple triple-A PC game titles, including Fortnite, CS:GO, and League of Legends. Apps for the Overwolf platform also provide in-game overlays directly in the game (similar to Steam). I was the project lead for this application, which collected metrics for use in competitive tournaments. The application was built using web technology (similar to Electron) and uses data provided by the Ov'
                ],
                technology: 'Vue, Vuetify, Overwolf',
                url: 'https://www.overwolf.com/app/Jackpot_Rising_Inc-Jackpot_Rising',
                coords: {x: 43, y: 8},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [
                    {src: baseUrl+'/img/projects/jr_overwolf/001.png', caption: 'Tournament List'},
                    {src: baseUrl+'/img/projects/jr_overwolf/002.png', caption: 'Tournament Details'},
                    {src: baseUrl+'/img/projects/jr_overwolf/003.png', caption: 'Login View'},
                    {src: baseUrl+'/img/projects/jr_overwolf/008.jpg', caption: 'The app At Dreamhack Dallas 2019'},
                    {src: baseUrl+'/img/projects/jr_overwolf/009.jpg', caption: 'The leaderboard standings at Dreamhack Dallas 2019'}
                ],
            },
            {
                id: 'homebase',
                name: 'Homebase',
                details: [
                    'Homebase was the customer-facing product for the Jackpot Rising platform and primary means for managing tournaments, game, leaderboard prize fulfillment, user moderation, and much more. A web-based PWA, it featured a full role and permission system for large corporations. I led all design and frontend initiatives for the application.'
                ],
                technology: 'Angular, Angular Material, Moment, Chart.js',
                url: null,
                coords: {x: 48, y: 31},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [
                    {src: baseUrl+'/img/projects/jr_homebase/001.png', caption: 'Login View'},
                    {src: baseUrl+'/img/projects/jr_homebase/002.png', caption: 'Deashboard and Active Stats'},
                    {src: baseUrl+'/img/projects/jr_homebase/003.png', caption: 'Organizations and Properties'},
                    {src: baseUrl+'/img/projects/jr_homebase/004.png', caption: 'Tournaments List'},
                    {src: baseUrl+'/img/projects/jr_homebase/005.png', caption: 'Tournament Form'},
                    {src: baseUrl+'/img/projects/jr_homebase/006.png', caption: 'A sample of UI components from the mockup'}
                ],
            },
            {
                id: 'playerhq',
                name: 'PlayerHQ',
                details: [
                    'The user-facing companion product for the Jackpot Rising platform, PlayerHQ acted as the central HUB for tournaments, leaderboards, games, social features, as well as allowing players to manage their account and funds. The app was spearheaded by myself as a way to merge the company’s web and native mobile clients. It was developed from the ground up as a PWA and included hybrid mobile clients for iOS and Android, the latter of which was created and maintained by myself. It also featured a web-based QR scanner for syncing with Jackpot Rising’s arcade devices. The scanner utilized WebGL and websockets to communicate in real-time between the app clients, server, and physical arcade device.'
                ],
                technology: 'Angular, Angular Material, Moment, Chart.js',
                url: null,
                coords: {x: 81, y: 11},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [
                    {src: baseUrl+'/img/projects/jr_playerhq/001.png', caption: 'Active list of tournaments'},
                    {src: baseUrl+'/img/projects/jr_playerhq/001a.png', caption: 'Tournament details and leaderboard'},
                    {src: baseUrl+'/img/projects/jr_playerhq/002.png', caption: 'List of available games'},
                    {src: baseUrl+'/img/projects/jr_playerhq/002a.png', caption: 'The game details view'},
                    {src: baseUrl+'/img/projects/jr_playerhq/004.png', caption: 'Support View'},
                    {src: baseUrl+'/img/projects/jr_playerhq/005.png', caption: 'Account and fund management'},
                    {src: baseUrl+'/img/projects/jr_playerhq/006.png', caption: 'Early mockup of the PlayerHQ app'}
                ],
            },
            {
                id: 'arcade',
                details: [
                    'One of my key efforts at Jackpot Rising included integrating our tournament platform with physical game cabinets, including skeeball, basketball, and mini-golf. I designed and implemented the on-screen UI and connection mechanisms, powered by Android Things running on a Raspberry Pi unit. Players could walk up to the device, sign into a web-based client, scan a QR code, and then immediately start playing the game. The web client featured a WebGL-based camera and utilized websockets to sync to the device. Some arcade devices were featured at Dreamhack Dallas 2019 and Cattle Baron’s Ball.'
                ],
                technology: 'Android Studio, Raspberry Pi, Angular',
                url: null,
                name: 'Arcade',
                coords: {x: 90, y: 37},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [
                    {src: 'https://www.youtube.com/embed/MsQ7q6vdTOo'}
                ],
                screenshots: [
                    {src: baseUrl+'/img/projects/jr_arcade/001.jpg', caption: 'The skeeball device'},
                    {src: baseUrl+'/img/projects/jr_arcade/002a.png', caption: 'The puttskee device'}
                ],
            },
            {
                id: 'speedleague',
                name: 'Speedleague',
                details: [
                    `Speedleague is an international motorsports league by Red Bull’s Global Rallycross Championship creator Brian Gale. Building on the League's role as a sports organizer for X-Games motorsports and partnered with ESPN, Jackpot Rising took on the challenge of developing a mobile racing video game to help promote and run tournaments at each race, which would be held at locations such as The Bahamas, St. Petersburg, Dubai, and more. I contributed primarily to the UI and UX of the game experience, but also assisted with game development. The game was originally started in Unity, but later ported to the Unreal game engine.`
                ],
                technology: 'Unreal Game Engine, Unity Game Engine, Sketch, Photoshop',
                url: 'https://www.tixr.com/groups/speedleague',
                coords: {x: 113, y: 10},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [
                    {src: baseUrl+'/img/projects/speedleague/001.png', caption: 'The in-game overlay UI'},
                    {src: baseUrl+'/img/projects/speedleague/002.png', caption: 'Main Menu'},
                    {src: baseUrl+'/img/projects/speedleague/003.png', caption: 'Track Selection'},
                    {src: baseUrl+'/img/projects/speedleague/004.png', caption: 'Vehical selection and customization'},
                    {src: baseUrl+'/img/projects/speedleague/005.png', caption: 'An tntro cinematic for the Tucson map'},
                    {src: baseUrl+'/img/projects/speedleague/006.png', caption: 'Pause Menu'},
                    {src: baseUrl+'/img/projects/speedleague/007.png', caption: 'Race Results'},
                    {src: baseUrl+'/img/projects/speedleague/008.png', caption: 'Loading Screen'},
                    {src: baseUrl+'/img/projects/speedleague/009.png', caption: 'Game Settings'},
                ],
            },
        ]
    },

    'gaming': {
        label: 'Gaming',
        projects: [
            {
                id: 'minirl',
                name: 'Minirl',
                details: [
                    'Minirl was my first foray into indie game development. In the game you play as Hank, the adorably murderous square boy, as he traverses a variety of worlds full of creepy monsters and overcome dangerous obstacles in search for Minirls - powerful gems that grant power.',
                    'Minirl is a procedurally-generated 2D rogue-lite with puzzle elements, which means a unique experience each time you play. It features accessible gameplay which allows you to dive right into the fun!',
                    'The game featured audio by Jesse W.D. James and mixed by Paul Lipscomb, whose work has been featured in games such as Destiny 2.'
                ],
                technology: 'Unity Game Engine, Android Studio, Xcode',
                url: 'http://minirlgame.com/',
                coords: {x: 86, y: 69},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [
                    {src: 'https://www.youtube.com/embed/34FzHsNFN1g', caption: 'The launch trailer'},
                ],
                screenshots: [
                    {src: baseUrl+'/img/projects/minirl/001.png', caption: 'The promotional website'},
                    {src: baseUrl+'/img/projects/minirl/002.png', caption: 'Grass World'},
                    {src: baseUrl+'/img/projects/minirl/003.png', caption: 'Cave World'},
                    {src: baseUrl+'/img/projects/minirl/004.png', caption: 'Snow World'},
                    {src: baseUrl+'/img/projects/minirl/005.png', caption: 'Space World'},
                    {src: baseUrl+'/img/projects/minirl/006.png', caption: 'Fire World'}
                ],
            },
            {
                id: 'elden-ring-planner',
                name: 'Elden Ring Planner',
                details: [
                    'I’m a long time fan of FromSoft games (Dark Souls, Bloodborne, Sekiro, etc). Their latest release, Elden Ring, is a sprawling action RPG that’s found massive success since release. This app is a FOSS web app created over the course of about 2-3 days. It allows players to visually browse and plan their character’s armor, weapons, and more. My announcement garnered the attention of several prominent members of the “Souls/Borne” community, and garnered around 115k impressions within the first week.'
                ],
                technology: 'Svelte/Kit, AWS (CDN via S3+Cloudfront), Github Pages',
                url: null,
                coords: {x: 110, y: 56},
                accent: 'rgba(0,0,0,0.5)',
                thumbnail: '',
                videos: [],
                screenshots: [],
            },
        ]
    },
    
};