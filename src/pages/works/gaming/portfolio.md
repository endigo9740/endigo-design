---
layout: "@layouts/LayoutWork.astro"
# ---
group_id: 0
group: Gaming
title: Portfolio Game
website: "https://d2zwgjl5tcwau5.cloudfront.net/"
accent: "#0f172a"
thumbnail: /works/gaming-portfolio.png
videos: []
screenshots: [
    { src: /screenshots/gaming/portfolio/003.png, caption: Inspired by Zelda },
    {
      src: /screenshots/gaming/portfolio/002.png,
      caption: Inspired by Elden Ring,
    },
    {
      src: /screenshots/gaming/portfolio/001.png,
      caption: Inspired by Hyper Light Drifter,
    },
    {
      src: /screenshots/gaming/portfolio/004.png,
      caption: Inspired by Hyper Light Drifter,
    },
    {
      src: /screenshots/gaming/portfolio/005.png,
      caption: Project pages appeared in a modal overlay,
    },
    # { src: /screenshots/gaming/portfolio/006.png, caption: The About page },
    {
      src: /screenshots/gaming/portfolio/007.png,
      caption: And interactive map view,
    },
  ]
---

In a previous iteration of this portfolio website, I introduced a game-like experience. The aesthetic was inspired by my favorite video games such as Heart Machine's [Hyper Light Drifter](https://www.heartmachine.com/hyper-light-drifter). This project paired SvelteKit, Tailwind, and [Skeleton](/works/skeleton-labs/skeleton). It also made heavy use of [PixiJS](https://pixijs.com/) to handle the visual and interactive aspects of Canvas and WebGL. Each pixel and sprite was hand drawn using [Aseprite](https://www.aseprite.org/), and the overworld generated using [Tiled](https://www.mapeditor.org/). You could optionally enable music, which used a sound system powered by [Howler.js](https://howlerjs.com/). I covered the creation of the site [in this blog post](https://dev.to/endigo9740/my-new-portfolio-3ke6), and you may [find the source code here](https://github.com/endigo9740/endigo-design/tree/v1).
