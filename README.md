# Endigo Design

[View the Live Site](https://endigodesign.com/)

## About the Project

This project is the portfolio website for Chris Simmons. It features both modes:

1. An interactive game-like experience. This works similar to 2D top-down perspective RPG games like Zelda or Pokemon.
2. A traditional website with standard navigation. Works exactly as you might imagine.

Either method will let you explore and learn more about me and projects I've contributed to. 

## Implementation

### Tech Stack

* [Svelte/Kit](https://kit.svelte.dev/) - frontend framework
* [Pixi.js](https://pixijs.com/) - canvas/webGL rendering
* [Tailwind CSS](https://tailwindcss.com/)
* [Howler.js](https://howlerjs.com/) - audio library
* [AWS S3](https://aws.amazon.com/s3/) - static hosting
* [AWS Cloudfront](https://aws.amazon.com/cloudfront/) - CDN (site + assets)

### Design

* [Aseprite](https://www.aseprite.org/) - for pixel art
* [Tiled map Editor](https://www.mapeditor.org/) - for tilemap generation

### Project Structure

```
/static - static assets (images, json, etc)
/src
    /lib
        /components - Svelte components
        /data - local data, in JSON-like format
        /game - game classes
            /effects - for visual game effect
            /objects - for game objects (entities)
        store.js - Svelte stores and global state
    /routes - app page routing
    app.css - global stylesheet
```

## Contact Me

If you're trying to get in touch with me, try any of the methods listed below.

* [Github](https://github.com/endigo9740)
* [LinkedIn](https://www.linkedin.com/in/chris-simmons-8a523a23/)
* [Twitter](https://twitter.com/endigodesign)
* [Medium](https://medium.com/@endigo9740)
* [Email](gundamx9740@gmail.com)

## Attribution

* [Music by Bensmir - via Itch.io](https://bensmir.itch.io/lofi-beats-vol1)

---

## Developement

Start a Local Server

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To build for Production

```bash
npm run build
```

> NOTE: check the notes in `svelte.config.js` if you run into build errors.

To run a preview server of the build:

```bash
npm run build
npm run preview
```