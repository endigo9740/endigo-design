const cdnBaseUrl = 'https://d234wyh4hwmj0y.cloudfront.net';

export const works: Record<string, IWork> = {
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
			},
			{
				id: 'superhero-faceoff',
				name: 'Superhero Faceoff',
				details: [
					`Previously tended by Brain & Bones, Skeleton is now supported by Skeleton Labs, a new company formed by myself and Trey Weir.`,
					`Skeleton was created to be open source since day one. It will continue to be free and open source under the MIT license. Skeleton Labs, however, will serve as an commercial extension, handling sponsorship funding and providing premium services alongside the the open source project.`,
					`Many people understand the challenges faced when funding source developement. To that end, Skeleton Labs will handle all commercial needs for the project and ensure the library can thrive for many years to come.`
				],
				technology: `Company, Sponsorship, Marketplace, Commercial Support`,
				url: 'https://choose-your-superhero.vercel.app/',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/superhero-faceoff/thumbnail.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2023/superhero-faceoff/img_1.png`, caption: 'Form Flow' },
					{ src: `${cdnBaseUrl}/2023/superhero-faceoff/img_2.png`, caption: 'Form Flow' }
				]
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
				id: 'bandmates',
				name: 'BandMates',
				details: [
					`Speed Trivia was the first in the series of games for the Brain & Bones engagement platform. It harnessed the popularity of casual games to allow companies and individuals to connect with their customers, followers, and employees. This was the first project I spearheaded during my time at Brain & Bones. The product is a fully interactive web-based game, featuring fast paced trivia and real-time leaderboards. It features modern web technology including a fully responsive PWA, and is playable on any web-connected device.`
				],
				technology: 'Angular/RxJS (game), Svelte/Kit (Website), Typescript, SASS, Moment, Anime.js',
				url: 'https://bandmates.vercel.app/',
				coords: { x: 72, y: 111 },
				accent: '#4c1d95',
				thumbnail: `${cdnBaseUrl}/2022/bandmates/thumbnail_2.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/bandmates/listing.png`, caption: 'The promotional marketing website' },
					{ src: `${cdnBaseUrl}/2022/bandmates/profile_form.png`, caption: 'The company logo' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/003.png`, caption: 'Speed Trivia game main menu' },
					{
						src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/004.png`,
						caption: 'Game start screen. The rocket and moon oribit the planet!'
					},
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/005.png`, caption: 'Core trivia gameplay on desktop' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/006.png`, caption: 'The live leaderboard standings' },
					{ src: `${cdnBaseUrl}/screenshots/brain-and-bones/speed-trivia/007.png`, caption: 'Advertisements created for Speed Trivia' }
				]
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
				id: 'stronger-together',
				name: 'Stronger Together',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: null,
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2022/stronger-together/bicep-white-bg.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/stronger-together/thumbnail.jpg`, caption: 'The comapny website' },
					{ src: `${cdnBaseUrl}/2022/stronger-together/img_1.jpg`, caption: 'The comapny website' },
					{ src: `${cdnBaseUrl}/2022/stronger-together/img_2.jpg`, caption: 'The comapny website' }
				]
			},
			{
				id: 'flutter-soundboard',
				name: 'Flutter Soundboard',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: null,
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2022/flutter-soundboard/thumb.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/flutter-soundboard/img_2.png`, caption: 'The main screen' },
					{ src: `${cdnBaseUrl}/2022/flutter-soundboard/img_1.png`, caption: 'The comapny website' }
				]
			}
		]
	},

	2021: {
		label: '2021',
		projects: [
			{
				id: 'cityhive',
				name: 'CityHive',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: 'https://www.cityhive.net/',
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2021/cityhive/thumb.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/flutter-soundboard/img_2.png`, caption: 'The main screen' },
					{ src: `${cdnBaseUrl}/2022/flutter-soundboard/img_1.png`, caption: 'The comapny website' }
				]
			},
			{
				id: 'deltika',
				name: 'Deltika',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: 'https://www.linkedin.com/company/deltika-ltd/about/',
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2021/deltika/thumb.jpeg`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2021/deltika/img_2.png`, caption: 'The main screen' },
					{ src: `${cdnBaseUrl}/2021/deltika/img_1.png`, caption: 'The comapny website' }
				]
			}
		]
	},

	// Gaming
	2020: {
		label: '2020',
		projects: [
			{
				id: 'old-resume',
				name: 'Old Resume',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: 'ryanroberts.dev',
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2020/old-resume/thumbnail.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2020/old-resume/img_1.png`, caption: 'The main screen' },
					{ src: `${cdnBaseUrl}/2020/old-resume/img_3.png`, caption: 'Project modal' },
					{ src: `${cdnBaseUrl}/2020/old-resume/img_2.png`, caption: 'Some css skills' }
				]
			}
		]
	}
};

interface IWork {
	label: string;
	projects: IProject[];
}

interface IProject {
	id: string;
	name: string;
	details: string[];
	technology: string;
	url?: string | null;
	coords: { x: number; y: number };
	accent: string;
	thumbnail: string;
	videos: IMediaObj[];
	screenshots: IMediaObj[];
}

interface IMediaObj {
	src: string;
	caption?: string;
}
