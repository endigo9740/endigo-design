import { RESUME_URL } from './constants';

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
				technology: `SvelteKit, PicoCSS, TypeScript, MongoDB, Prisma + Prisma Cloud, Cloudflare CRON jobs, Twilio, Vercel Edge network`,
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
					`A YouTube channel I created to talk about things I'm passionate about, from programming, mental health, calisthenics, discipline, and more.`,
					`I initially wanted to create the channel after creating lots of projects with SvelteKit, and noticing a gap in information regarding some of the problems I was running into. However today, the channel has evolved into something much more abstract.`
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
					`Bandmates is a social media platform built by artists, for artists. It's a website to find and connect with like minded musicians and artists. Kind of like Tinder, for musicians.`,
					`I built and designed every aspect of this website, from the UI, to the database design.`
				],
				technology: 'SvelteKit, TypeScript, TailwindCSS (UnoCSS), Supabase, Prisma, Vercel',
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
					`A mobile app written with flutter, used to find local vegan restaurants near you!`,
					`Inspired by PizzaCompass, an app I saw on the app store in 2007, I wanted to veganize it.`,
					`Created a nice framework for when I want to connect with local businesses / Easy.co.il, etc`
				],
				technology: 'Flutter, Google Places API, Riverpod, Geolocator, TDD, Clean Architecture',
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
					`A cross platform mobile app built with React Native and Firebase, used to gain motivation for working out. The app sends a notification to everyone else in your group upon completing an exercise, with a weekly report as to who gained the most points.`,
					`Each exercese has a point value attached, i.e. Pull Ups: 2 points per rep, push ups, 1 point, etc.`
				],
				technology: 'React Native, SCSS, TypeScript, Firebase, MongoDB, iOS TestFlight',
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
					`The first mobile app I built, mainly to familiarize myself with mobile app development (in Flutter).`,
					`A simple app that allows users to create a soundboard, to trigger sounds that the user adds. In the screenshot I attached, i created a soundboard for various sounds my dog Ollie makes.`
				],
				technology: 'Flutter, Riverpod, TDD, Clean Architecture',
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
					`In May of 2021, I joined the core product team at CityHive as a full stack engineer. CityHive is an e-commerce platform for the wine, beer, and spirits industry, serving three entity tiers.`,
					`During my time at the company, I have led the design and development of many integral features that the company is using today`,
					`See the highlights in <a href="${RESUME_URL}" target="_blank">My Resume</a> to read more about my notable achievements and contributions here.`
				],
				technology: 'Ruby on Rails, Angular, TypeScript, MongoDB, Cloudflare, Python, so much more',
				url: 'https://www.cityhive.net/',
				coords: { x: 14, y: 34 },
				accent: '#dc334a',
				thumbnail: `${cdnBaseUrl}/2021/cityhive/thumb.png`,
				videos: [],
				screenshots: [
					{ src: `${cdnBaseUrl}/2021/cityhive/img_2.png`, caption: 'An ecommerce platform' },
					{ src: `${cdnBaseUrl}/2021/cityhive/img_1.png`, caption: 'The mobile apps we provide' }
				]
			},
			{
				id: 'deltika',
				name: 'Deltika',
				details: [
					`In 2021, I joined a startup, Deltika Ltd. and led the design and development of an analytics dashboard for fiverr freelancers.`,
					`See the highlights in <a href="${RESUME_URL}" target="_blank">My Resume</a> to read more about my notable achievements and contributions here.`
				],
				technology: 'React, TypeScript, Styled-components + SCSS, AWS, Python, Selenium, BS4',
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
				id: 'past-projects',
				name: 'Past Projects',
				details: [
					'Visit my previous portfolio website to see a beautiful showase of the projects I completed before 2020',
					'built with pure html and css, the design was inspired from an Advanced SCSS Udemy course I completed (34+ hours) with Jonas Schmedtmann.'
				],
				technology: 'HTML, SCSS, JavaScript, Netlify (previous), Vercel (now)',
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
