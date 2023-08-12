const cdnBaseUrl = 'https://d234wyh4hwmj0y.cloudfront.net';

export const works: Record<string, IWorkObject> = {
	// ch
	2023: {
		label: '2023',
		projects: [
			{
				id: 'songsterr-downloader',
				name: 'Songsterr Downloader',
				details: [
					`I am a lead full stack engineer in the product team at CityHive. An e-commerce platform for the wine, beer, and spirits industry`,
					`In short, the library utilizes Tailwind’s utility class-based design system to quickly and easily customize and extend the look and feel of each component. Paired with Svelte’s powerful component architecture, Skeleton creates customized, responsive, and reactive interfaces for any size project.`,
					`The library covers everything from simple buttons and tabs to more complex and interactive elements, such as modals, dialogs, and popups. It includes built-in support for both themes and dark mode, while providing access to bleeding edge features such as SVG filters.`,
					`Skeleton is hugely popular, with over 20k+ downloads a month, 1.6k+ stars on GitHub, and 1k+ memebers on Discord. While promoting Skeleton, I've appeared on episodes of the <a href="https://www.youtube.com/watch?v=2OnJYCXJPK4" target="_blank">Svelte Sirens</a>, the <a href="https://podrocket.logrocket.com/skeleton?ref=skeleton.ghost.io" target="_blank">Logrocket Podcast</a>, as well as our <a href="https://www.youtube.com/playlist?list=PLJtgPDPrJYAuDISpNrarLCjVInKknDCcA" target="_blank">Skeleton launch event</a>.`
				],
				technology: `Svelte/Kit, Tailwind, Vite, Vitest, Testing Library, NPM, Typescript`,
				url: 'https://songsterr-downloader.com',
				coords: { x: 113, y: 102 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/songsterr-downloader/img_2.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2023/songsterr-downloader/demo.gif`, caption: 'Search Functionality' }, // caption: ''
					{ src: `${cdnBaseUrl}/2023/songsterr-downloader/img_1.png`, caption: 'Homepage' }
				]
			},
			{
				id: 'open-tunings',
				name: 'Open Tunings',
				details: [
					`Previously tended by Brain & Bones, Skeleton is now supported by Skeleton Labs, a new company formed by myself and Trey Weir.`,
					`Skeleton was created to be open source since day one. It will continue to be free and open source under the MIT license. Skeleton Labs, however, will serve as an commercial extension, handling sponsorship funding and providing premium services alongside the the open source project.`,
					`Many people understand the challenges faced when funding source developement. To that end, Skeleton Labs will handle all commercial needs for the project and ensure the library can thrive for many years to come.`
				],
				technology: `Company, Sponsorship, Marketplace, Commercial Support`,
				url: 'https://open-tunings.com',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/open-tunings/img_2.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2023/open-tunings/create_demo.gif`, caption: 'Create Flow' },
					{ src: `${cdnBaseUrl}/2023/open-tunings/img_1.png`, caption: 'Home Page' }
				]
			},
			{
				id: 'accountability-texter',
				name: 'Accountability Texter',
				details: [
					`Previously tended by Brain & Bones, Skeleton is now supported by Skeleton Labs, a new company formed by myself and Trey Weir.`,
					`Skeleton was created to be open source since day one. It will continue to be free and open source under the MIT license. Skeleton Labs, however, will serve as an commercial extension, handling sponsorship funding and providing premium services alongside the the open source project.`,
					`Many people understand the challenges faced when funding source developement. To that end, Skeleton Labs will handle all commercial needs for the project and ensure the library can thrive for many years to come.`
				],
				technology: `Company, Sponsorship, Marketplace, Commercial Support`,
				url: 'https://accountability-texter.vercel.app/start',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/accountability-texter/img_1.png`,
				videos: [{ src: 'https://www.youtube.com/embed/kyPzV8m9wQ8', caption: 'Tech Walkthrough' }],
				screenshots: [{ src: `${cdnBaseUrl}/2023/accountability-texter/img_1.png`, caption: 'Form Flow' }]
			}
		]
	},

	2022: {
		label: '2022',
		projects: [
			{
				id: 'youtube',
				name: 'The Coding Den',
				details: [
					'Over the course of two years, I led all development and design efforts for Brain & Bones. This included managing a small team of developers while implementing the core SaaS platform, management and user-facing web apps, as well as the Speed Trivia game client. I was responsible for managing all brand guidelines within the company and handled UX and visual identity for each product.'
				],
				technology: 'Svelte/Kit (website), Sketch (Design/UI/UX), Notion (Guidelines)',
				url: 'https://www.brainandbonesllc.com/',
				coords: { x: 29, y: 101 },
				accent: '#34d399',
				thumbnail: `${cdnBaseUrl}/2022/youtube/thumbnail.png`,
				videos: [
					{ src: 'https://www.youtube.com/embed/TZe8ozKkOGE', caption: 'SvelteKit tutorial 1' },
					{ src: 'https://www.youtube.com/embed/3ukcPFHLv-k', caption: 'Bun Scripting' },
					{ src: 'https://www.youtube.com/embed/5zVln5e-dBQ', caption: 'Developer Productivity Tools' },
					{ src: 'https://www.youtube.com/embed/yNRvl-38bZM', caption: 'LeetCode Tutorial' }
				],
				screenshots: []
			},
			{
				id: 'humblecompass',
				name: 'HumbleCompass',
				details: [
					'The customer-facing web application for the Brain & Bones platform, the Helm allows clients to manage games, tournaments, and monitor game usage and engagement within their organization. I directed all key initiatives of the project, from concept to launch. This included designing and implementing the frontend client, providing requirements for backend developers, implementing Stripe as the payment gateway, and fielding quality assurance testing alongside our QA engineer.'
				],
				technology: 'Angular, Angular Material, RxJS, Typescript, SASS, Stripe, Chart.js, Moment',
				url: 'https://github.com/Metaphysics0/humblecompass',
				coords: { x: 51, y: 91 },
				accent: '#818cf8',
				thumbnail: `${cdnBaseUrl}/2022/humblecompass/landing_page.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/humblecompass/landing_page.png`, caption: 'The Landing Page' },
					{ src: `${cdnBaseUrl}/2022/humblecompass/img_1.png`, caption: 'The compass UI' },
					{ src: `${cdnBaseUrl}/2022/humblecompass/trimmd.gif`, caption: 'The UI flow' },
					{ src: `${cdnBaseUrl}/2022/humblecompass/landing_page_2.png`, caption: 'Landing Page part 2' }
				]
			},
			{
				id: 'speed-trivia',
				name: 'Speed Trivia',
				details: [
					`Speed Trivia was the first in the series of games for the Brain & Bones engagement platform. It harnessed the popularity of casual games to allow companies and individuals to connect with their customers, followers, and employees. This was the first project I spearheaded during my time at Brain & Bones. The product is a fully interactive web-based game, featuring fast paced trivia and real-time leaderboards. It features modern web technology including a fully responsive PWA, and is playable on any web-connected device.`
				],
				technology: 'Angular/RxJS (game), Svelte/Kit (Website), Typescript, SASS, Moment, Anime.js',
				url: 'https://www.speedtriviagame.com/',
				coords: { x: 72, y: 111 },
				accent: '#4c1d95',
				thumbnail: `${cdnBaseUrl}/works/bb-speed-trivia.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/001.png`, caption: 'The promotional marketing website' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/002.png`, caption: 'The company logo' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/003.png`, caption: 'Speed Trivia game main menu' },
					{
						src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/004.png`,
						caption: 'Game start screen. The rocket and moon oribit the planet!'
					},
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/005.png`, caption: 'Core trivia gameplay on desktop' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/006.png`, caption: 'The live leaderboard standings' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/007.png`, caption: 'Advertisements created for Speed Trivia' }
				]
			}
		]
	},

	// Jackpot Rising
	2021: {
		label: '2021',
		projects: [
			{
				id: 'branding',
				name: 'Branding',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: null,
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/works/jr-logo.png`,
				videos: [{ src: 'https://www.youtube.com/embed/0ah2zZQ6xHc' }],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/001.png`, caption: 'The comapny website' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/002.png`, caption: 'The Jackpot Rising logo and brand colors' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/branding/003.png`, caption: 'Branded shirts for staff' }
				]
			},
			{
				id: 'overwolf',
				name: 'Overwolf',
				details: [
					'<a href="https://www.overwolf.com/" target="_blank">Overwolf</a> provides middleware for tracking game metrics (score, kills, etc.) in real-time for multiple triple-A PC game titles. Apps created for the Overwolf platform provide in-game overlays directly in the game (similar to Steam). I was the project lead responsible for creating the Jackpot Rising app, which collected metrics for use in competitive tournaments. The application was built using web technology (similar to Electron) alongside the Overwolf API.'
				],
				technology: 'Vue, Vuetify, SASS, Overwolf',
				url: 'https://www.overwolf.com/app/Jackpot_Rising_Inc-Jackpot_Rising',
				coords: { x: 43, y: 8 },
				accent: '#171717',
				thumbnail: `${cdnBaseUrl}/works/jr-overwolf.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/001.png`, caption: 'Navigating available tournaments' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/002.png`, caption: 'Tournament Details and entry' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/003.png`, caption: 'The login page' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/008.png`, caption: 'Dreamhack Dallas 2019' },
					{
						src: `${cdnBaseUrl}/screenshots/jackpot-rising/overwolf/009.png`,
						caption: 'The leaderboard standings at Dreamhack Dallas 2019'
					}
				]
			},
			{
				id: 'arcade',
				details: [
					'One of the key efforts at Jackpot Rising included integrating our tournament platform with physical game cabinets, including skeeball, basketball, and mini-golf. I designed and implemented the on-screen UI and connection mechanisms, powered by Android Things running on a Raspberry Pi. Players could walk up to the device, sign into a web-based client, scan a QR code, and then immediately start playing the game. The web client featured a WebGL-based camera and utilized websockets to sync to the device. These arcade devices were featured at Dreamhack Dallas 2019 and the Dallas Cattle Baron’s Ball.'
				],
				technology: 'Android Studio, Raspberry Pi, Angular, Pusher.js',
				url: null,
				name: 'Arcade',
				coords: { x: 13, y: 9 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/works/jr-arcade.png`,
				videos: [{ src: 'https://www.youtube.com/embed/MsQ7q6vdTOo' }],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/arcade/001.png`, caption: 'The skeeball device' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/arcade/002.png`, caption: 'The puttskee device' }
				]
			},
			{
				id: 'homebase',
				name: 'Homebase',
				details: [
					'Homebase was the customer-facing app for the Jackpot Rising platform and primary means for managing tournaments, leaderboards, prize fulfillment, user moderation, and much more. A web-based PWA, it featured a full role and permission system for large corporations. I was the project lead on this product and led all design and implementation.'
				],
				technology: 'Angular, Angular Material, Typescript, SASS, Moment, Chart.js',
				url: null,
				coords: { x: 48, y: 31 },
				accent: '#1d2d3f',
				thumbnail: `${cdnBaseUrl}/works/jr-homebase.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/001.png`, caption: 'Login View' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/002.png`, caption: 'Deashboard and Active Stats' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/003.png`, caption: 'Organizations and Properties' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/004.png`, caption: 'Tournaments List' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/005.png`, caption: 'Tournament Form' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/homebase/006.png`, caption: 'A mock of various UI components' }
				]
			},
			{
				id: 'playerhq',
				name: 'PlayerHQ',
				details: [
					'The user-facing companion app for the Jackpot Rising platform, PlayerHQ acted as the central HUB for tournaments, leaderboards, games, social features, as well as allowing players to manage their account and funds. The app was spearheaded by myself and bridged the company’s web and native mobile clients. It was developed from the ground up as a PWA and included hybrid mobile clients for iOS and Android, the latter of which was created and maintained by myself. It also featured a web-based QR scanner for syncing with Jackpot Rising’s arcade devices. The scanner utilized WebGL and websockets to communicate in real-time between the client, server, and physical arcade device.'
				],
				technology: 'Angular, Angular Material, Typescript, SASS, Android Studio, Pusher.js, Moment, Chart.js',
				url: null,
				coords: { x: 81, y: 11 },
				accent: '#00e2fa',
				thumbnail: `${cdnBaseUrl}/works/jr-playerhq.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/001.png`, caption: 'Active list of tournaments' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/002.png`, caption: 'Tournament details and leaderboard' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/003.png`, caption: 'List of available games' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/004.png`, caption: 'The game details view' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/005.png`, caption: 'Support View' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/006.png`, caption: 'Account and fund management' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/007.png`, caption: 'Early mockup of the PlayerHQ app' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/007.png`, caption: 'Early mockup of the PlayerHQ app' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/playerhq/008.png` }
				]
			},
			{
				id: 'speedleague',
				name: 'Speedleague',
				details: [
					`Speedleague is an international motorsports league created by Red Bull’s Global Rallycross Championship creator Brian Gale. Building on the League's role as a sports organizer for X-Games motorsports and partnered with ESPN, Jackpot Rising took on the challenge of developing a mobile racing video game to help promote and run tournaments alongside each real world race, which would be held at locations such as The Bahamas, St. Petersburg, Dubai, and more. I designed the UX, implemented the UI, and provided minor contributions to the game development. The game was originally started in Unity, but later ported to the Unreal engine.`
				],
				technology: 'Unreal Game Engine, Unity Game Engine, Sketch, Photoshop',
				url: 'https://www.tixr.com/groups/speedleague',
				coords: { x: 113, y: 10 },
				accent: '#f54d78',
				thumbnail: `${cdnBaseUrl}/works/jr-speedleague.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/001.png`, caption: 'The in-game overlay UI' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/002.png`, caption: 'Main Menu' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/003.png`, caption: 'Track Selection' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/004.png`, caption: 'Vehical selection and customization' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/005.png`, caption: 'An tntro cinematic for the Tucson map' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/006.png`, caption: 'Pause Menu' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/007.png`, caption: 'Race Results' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/008.png`, caption: 'Loading Screen' },
					{ src: `${cdnBaseUrl}/screenshots/jackpot-rising/speedleague/009.png`, caption: 'Game Settings' }
				]
			}
		]
	},

	// Gaming
	2020: {
		label: '2020',
		projects: [
			{
				id: 'minirl',
				name: 'Minirl',
				details: [
					'Minirl was my first foray into indie game development. In the game you play as Hank, the adorably murderous square boy, as he traverses a variety of worlds full of creepy monsters and overcomes dangerous obstacles in search for Minirls - powerful gems that grant power.',
					'Minirl is a procedurally-generated 2D rogue-lite with puzzle elements, which means a unique experience each time you play. It features accessible gameplay which allows you to dive right into the fun!',
					'Music and sound effects were composed by Jesse W.D. James and mixed by Paul Lipscomb, whose work has been featured in games such as Destiny 2.'
				],
				technology: 'Unity Game Engine, Android Studio, Xcode, Sketch',
				url: 'http://minirlgame.com/',
				coords: { x: 115, y: 61 },
				accent: '#5a253f',
				thumbnail: `${cdnBaseUrl}/works/gaming-minirl.png`,
				videos: [{ src: 'https://www.youtube.com/embed/34FzHsNFN1g', caption: 'The launch trailer' }],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/001.png`, caption: 'The promotional website' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/002.png`, caption: 'Grass World' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/003.png`, caption: 'Cave World' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/004.png`, caption: 'Snow World' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/005.png`, caption: 'Space World' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/minirl/006.png`, caption: 'Fire World' }
				]
			},
			{
				id: 'elden-ring-planner',
				name: 'Elden Ring Planner',
				details: [
					'I’m a long time fan of FromSoft games (Dark Souls, Bloodborne, Sekiro, etc). Their latest release, <a href="https://en.bandainamcoent.eu/elden-ring/elden-ring" target="_blank">Elden Ring</a>, is a sprawling action RPG that’s found massive success since release. I created this simple FOSS web app over the course of about 2-3 days. It allows players to visually browse and plan their character’s armor, armaments, and more. My <a href="https://twitter.com/endigodesign/status/1537950064215089153" target="_blank">Twitter announcement</a> garnered the attention of several prominent members of the “Souls/Borne” community, and attracted over 100k impressions within the first week.'
				],
				technology: 'Svelte/Kit, AWS (CDN via S3+Cloudfront), Github Pages',
				url: 'https://endigo9740.github.io/elden-ring-planner',
				coords: { x: 112, y: 41 },
				accent: '#202018',
				thumbnail: `${cdnBaseUrl}/works/gaming-er-planner.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/screenshots/gaming/elden-ring-planner/001.png`, caption: 'Your selected gear' },
					{ src: `${cdnBaseUrl}/screenshots/gaming/elden-ring-planner/002.png`, caption: 'Browsing available armaments' }
				]
			}
		]
	}
};

interface IWorkObject {
	label: string;
	projects: IProject[];
}

interface IProject {
	id: string;
	name: string;
	details: string[];
	technology: string;
	url: string;
	coords: ICoords;
	accent: string;
	thumbnail: string;
	videos: IVideo[];
	screenshots: IScreenshot[];
}

interface IScreenshot {
	src: string;
	caption?: string;
}

interface IVideo {
	src: string;
	caption: string;
}

interface ICoords {
	x: number;
	y: number;
}
