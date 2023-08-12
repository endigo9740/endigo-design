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
					`A web app that converts guitar tabs from songsterr.com into Guitar Pro (.gpx) ﬁles. Used by 100's of users daily. Trended on hackernews and reddit`,
					`Used SvelteKit and web scraping with Node.js + TypeScript to grab links from an exposed API from songsterr.`,
					`<a href="https://sonsgsterr-downloader.com" target="_blank">Songsterr Downloader</a> is hugely popular, with over 100 downloads per day, a dedicated reddit thread, and many github stars, the potential for growth within this application is huge.`
				],
				technology: `Svelte/Kit, Node.js, Tailwind, Vite, Vitest, Vercel, NPM, Typescript`,
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
					`Open tunings is a website tailored for guitarists and musicians who aspire to find new and alternate ways to tune their guitar.`,
					`It's a crowd-sourced listing website, where anybody can add a tuning for other guitarists to try. Created a web based instrument with Tone.js, to preview and listen to the way the tuning sounds.`,
					`Used SvelteKit, MongoDB, Tailwind, Vercel, and more to create this.`
				],
				technology: `SvelteKit, MongoDB, Prisma, TailwindCSS, SkeletonUI, Tone.js, TypeScript, Vercel`,
				url: 'https://open-tunings.com',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/open-tunings/logo-lg.png`,
				videos: [{ src: 'https://www.youtube.com/embed/TZe8ozKkOGE', caption: 'Video tech walkthrough!' }],
				screenshots: [
					{ src: `${cdnBaseUrl}/2023/open-tunings/create_demo.gif`, caption: 'Create Flow' },
					{ src: `${cdnBaseUrl}/2023/open-tunings/img_1.png`, caption: 'Home Page' }
				]
			},
			{
				id: 'accountability-texter',
				name: 'Accountability Texter',
				details: [
					`A web app to hold you accountable for achieving a goal. Simply enter in a goal that you want to achieve, a target date, and your phone number, and receive an AI generated text x times per day until the target date arrives!`,
					`Inspired from Pieter Levels, this was an app that I wanted to build for myself to personally use.`
				],
				technology: `SvelteKit, PicoCSS, TypeScript, MongoDB, Prisma, Cloudflare CRON jobs, Twilio`,
				url: 'https://accountability-texter.vercel.app/start',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/accountability-texter/dude.png`,
				videos: [{ src: 'https://www.youtube.com/embed/kyPzV8m9wQ8', caption: 'Tech Walkthrough' }],
				screenshots: [{ src: `${cdnBaseUrl}/2023/accountability-texter/img_1.png`, caption: 'Form Flow' }]
			},
			{
				id: 'superhero-faceoff',
				name: 'Superhero Faceoff',
				details: [
					`A simple web app built with Next.js 13, Tailwind, and a superhero API, to search and compare superheroes against each other`,
					`Mainly built to test Next.js 13 in stable production.`
				],
				technology: `React, Next.js 13, TypeScript, Tailwind, Vercel`,
				url: 'https://choose-your-superhero.vercel.app/',
				coords: { x: 0, y: 0 },
				accent: '#242c46',
				thumbnail: `${cdnBaseUrl}/2023/superhero-faceoff/marvel.jpeg`,
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
				technology: 'Final Cut Pro, YouTube Creator Studio, Logic Pro X',
				url: 'https://www.youtube.com/channel/UCX3N9NavUuYjBPwVOv5I3Nw',
				coords: { x: 29, y: 101 },
				accent: '#34d399',
				thumbnail: `${cdnBaseUrl}/2022/youtube/logo-3.jpeg`,
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
				thumbnail: `${cdnBaseUrl}/2022/bandmates/pixel-art.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2022/bandmates/img_1.png`, caption: 'The main page' },
					{ src: `${cdnBaseUrl}/2022/bandmates/img_2.png`, caption: 'Profile modal view.' },
					{ src: `${cdnBaseUrl}/2022/bandmates/img_3.png`, caption: 'Edit Profile page' },
					{ src: `${cdnBaseUrl}/2022/bandmates/img_4.png`, caption: 'Edit Profile page 2, adding social links' }
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
				thumbnail: `${cdnBaseUrl}/2022/humblecompass/img_4.png`,
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
		label: '2020 And Beyond...',
		projects: [
			{
				id: 'old-resume',
				name: 'Old Resume',
				details: [
					'Jackpot Rising was a tournament platform that integrated within games of all types, including hardcore, casual/mobile, and even real world arcade devices. The platform allowed users to compete against each other in progressive eSports-esque tournaments for real money, prizes, and digital goods. During my three years at Jackpot Rising, I managed the majority of the company’s branding, UX, product design, and led several key projects and initiatives.'
				],
				technology: 'Sketch, Photoshop, Angular (website)',
				url: 'https://old-resume.vercel.app/',
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
