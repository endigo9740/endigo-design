const cdnBaseUrl: string = 'http://cdn.endigodesign.com.s3-us-east-2.amazonaws.com/endigo_design/portfolio';

export const works: any = {

    'brain-&-bones': {
        label: 'Brain & Bones',
        projects: [
            {
                id: 'skeleton',
                name: 'Skeleton',
                details: [
                    'A fully-featured Svelte UI component library featuring tight integration of Tailwind and its conventions, Skeleton was originally created for internal uses at Brain & Bones during our migration from Angular to Svelte. I realized it would be a net positive to open source the project to the community. As such, we’re aiming to release and allow open source contributions soon. The library provides a host of fully-featured components, and supports both themes and dark mode. Skeleton was originally inspired by component libraries such as Mantine in the React ecosystem.'
                ],
                technology: `Svelte/Kit, Tailwind, Vite, Typescript, Vitest/Testing Library, Highlight.js`,
                url: 'https://skeleton.brainandbonesllc.com/',
                coords: {x: 113, y: 102},
                accent: '#111827',
                thumbnail: `${cdnBaseUrl}/works/bb-skeleton.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/skeleton/001.png`}, // caption: ''
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/skeleton/002.png`},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/skeleton/003.png`},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/skeleton/004.png`},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/skeleton/005.png`},
                ],
            },
            {
                id: 'branding',
                name: 'Branding',
                details: [
                    'Over the course of two years, I was the lead on all branding, marketing, and development at Brain & Bones. This included multiple web apps and services, various marketing initiatives, as well as establishing the complete brand guidelines and visual identity for both the company and their products.'
                ],
                technology: 'Svelte/Kit (website), Sketch (UI/UX), Notion (Guidelines)',
                url: 'https://www.brainandbonesllc.com/',
                coords: {x: 29, y: 101},
                accent: '#34d399',
                thumbnail: `${cdnBaseUrl}/works/bb-logo.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/branding/001.png`, caption: 'The company logo'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/branding/002.png`, caption: 'The brand colors'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/branding/003.png`, caption: 'Font and Typography'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/branding/004.png`, caption: 'The company website'},
                ],
            },
            {
                id: 'helm',
                name: 'The Helm',
                details: [
                    'The customer-facing web product for the Brain & Bones platform, the Helm allows clients to manage games, tournaments, and monitor game usage and engagement within their organization. I directed all key initiatives of the project, from concept to launch. This included designing and implementing the entirety of the frontend client, providing requirements and assisting our backend developers with architecting the API and data flow, and fielding testing alongside our primary QA engineer.'
                ],
                technology: 'Angular, Angular Material, RxJS, Typescript, Chart.js, Moment',
                url: 'https://admin.speedtriviagame.com/',
                coords: {x: 51, y: 91},
                accent: '#818cf8',
                thumbnail: `${cdnBaseUrl}/works/bb-helm.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/helm/001.png`, caption: 'The quiz selection'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/helm/002.png`, caption: 'The quiz metrics dashboard'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/helm/003.png`, caption: 'Attached quiz media'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/helm/004.png`, caption: 'Browsing organizations'},
                ],
            },
            {
                id: 'speed-trivia',
                name: 'Speed Trivia',
                details: [
                    `Speed Trivia was the first in the series of planned games for the Brain & Bones engagement platform. It harnessed the popularity of casual games to allow companies and individuals to connect with their customers, followers, and employees. This was the first project I spearheaded during my time at Brain & Bones. The product is a fully interactive web-based game, featuring fast paced trivia and leaderboards. It was built completely from the ground up using modern web technology. It's a fully responsive PWA that works on any web-connected device.`
                ],
                technology: 'Angular/RxJS (game), Svelte/Kit (Website), Typescript, Moment, Anime.js',
                url: 'https://www.speedtriviagame.com/',
                coords: {x: 72, y: 111},
                accent: '#4c1d95',
                thumbnail: `${cdnBaseUrl}/works/bb-speed-trivia.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/001.png`, caption: 'The promotional marketing website'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/002.png`, caption: 'The company logo'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/003.png`, caption: 'Speed Trivia game main menu'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/004.png`, caption: 'Game start screen. The rocket and moon oribit the planet!'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/005.png`, caption: 'Core trivia gameplay on desktop'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/006.png`, caption: 'The live leaderboard standings'},
                    {src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/007.png`, caption: 'Advertisements created for Speed Trivia'},
                ],
            },
        ]
    },

    'jackpot-rising': {
        label: 'Jackpot Rising',
        projects: [
            {
                id: 'branding',
                name: 'Branding',
                details: [
                    'Jackpot Rising was a tournament platform that integrated into games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
                ],
                technology: 'Sketch, Photoshop, Angular (website)',
                url: null,
                coords: {x: 14, y: 34},
                accent: '#dc334a',
                thumbnail: `${cdnBaseUrl}/works/jr-logo.png`,
                videos: [
                    {src: 'https://www.youtube.com/embed/0ah2zZQ6xHc'}
                ],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/001.png`, caption: 'The comapny website'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/002.png`, caption: 'The Jackpot Rising logo and brand colors'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/003.png`, caption: 'Branded shirts for staff'}
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
                accent: '#27223e',
                thumbnail: `${cdnBaseUrl}/works/jr-overwolf.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/001.png`, caption: 'Tournament List'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/002.png`, caption: 'Tournament Details'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/003.png`, caption: 'Login View'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/008.png`, caption: 'The app At Dreamhack Dallas 2019'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/009.png`, caption: 'The leaderboard standings at Dreamhack Dallas 2019'}
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
                coords: {x: 13, y: 9},
                accent: '#dc334a',
                thumbnail: `${cdnBaseUrl}/works/jr-arcade.png`,
                videos: [
                    {src: 'https://www.youtube.com/embed/MsQ7q6vdTOo'}
                ],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/arcade/001.png`, caption: 'The skeeball device'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/arcade/002.png`, caption: 'The puttskee device'}
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
                accent: '#1d2d3f',
                thumbnail: `${cdnBaseUrl}/works/jr-homebase.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/001.png`, caption: 'Login View'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/002.png`, caption: 'Deashboard and Active Stats'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/003.png`, caption: 'Organizations and Properties'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/004.png`, caption: 'Tournaments List'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/005.png`, caption: 'Tournament Form'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/006.png`, caption: 'A sample of UI components from the mockup'}
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
                accent: '#00e2fa',
                thumbnail: `${cdnBaseUrl}/works/jr-playerhq.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/001.png`, caption: 'Active list of tournaments'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/002.png`, caption: 'Tournament details and leaderboard'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/003.png`, caption: 'List of available games'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/004.png`, caption: 'The game details view'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/005.png`, caption: 'Support View'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/006.png`, caption: 'Account and fund management'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/007.png`, caption: 'Early mockup of the PlayerHQ app'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/007.png`, caption: 'Early mockup of the PlayerHQ app'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/008.png`}
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
                accent: '#f54d78',
                thumbnail: `${cdnBaseUrl}/works/jr-speedleague.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/001.png`, caption: 'The in-game overlay UI'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/002.png`, caption: 'Main Menu'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/003.png`, caption: 'Track Selection'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/004.png`, caption: 'Vehical selection and customization'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/005.png`, caption: 'An tntro cinematic for the Tucson map'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/006.png`, caption: 'Pause Menu'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/007.png`, caption: 'Race Results'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/008.png`, caption: 'Loading Screen'},
                    {src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/009.png`, caption: 'Game Settings'},
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
                coords: {x: 115, y: 61},
                accent: '#5a253f',
                thumbnail: `${cdnBaseUrl}/works/gaming-minirl.png`,
                videos: [
                    {src: 'https://www.youtube.com/embed/34FzHsNFN1g', caption: 'The launch trailer'},
                ],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/001.png`, caption: 'The promotional website'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/002.png`, caption: 'Grass World'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/003.png`, caption: 'Cave World'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/004.png`, caption: 'Snow World'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/005.png`, caption: 'Space World'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/minirl/006.png`, caption: 'Fire World'}
                ],
            },
            {
                id: 'elden-ring-planner',
                name: 'Elden Ring Planner',
                details: [
                    'I’m a long time fan of FromSoft games (Dark Souls, Bloodborne, Sekiro, etc). Their latest release, Elden Ring, is a sprawling action RPG that’s found massive success since release. This app is a FOSS web app created over the course of about 2-3 days. It allows players to visually browse and plan their character’s armor, weapons, and more. My announcement garnered the attention of several prominent members of the “Souls/Borne” community, and garnered around 115k impressions within the first week.'
                ],
                technology: 'Svelte/Kit, AWS (CDN via S3+Cloudfront), Github Pages',
                url: 'https://endigo9740.github.io/elden-ring-planner',
                coords: {x: 112, y: 41},
                accent: '#202018',
                thumbnail: `${cdnBaseUrl}/works/gaming-er-planner.png`,
                videos: [],
                screenshots: [
                    {src: `${cdnBaseUrl}/screenshots/gaming/elden-ring-planner/001.png`, caption: 'Your selected gear'},
                    {src: `${cdnBaseUrl}/screenshots/gaming/elden-ring-planner/002.png`, caption: 'Browsing available armaments'},
                ],
            },
        ]
    },
    
};