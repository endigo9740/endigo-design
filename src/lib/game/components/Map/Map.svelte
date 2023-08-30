<script lang="ts">
	import { onMount } from 'svelte';
	import { cameraStore, tile } from '$lib/game/stores';

	// Skeleton
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	export let zoom = 4;
	export let pillars: any;
	export let npcs: any;

	let elemCanvas: HTMLCanvasElement;

	// Pillar Coords
	const coordsPillars: any[] = [];
	pillars.forEach((p: any) => {
		coordsPillars.push({
			x: Math.round(p.container.x / tile.unit(1)),
			y: Math.round(p.container.y / tile.unit(1)) + 4 // pillar base
		});
	});

	// NPCS Coords
	const coordsNpcs: any[] = [];
	npcs.forEach((npc: any) => {
		coordsNpcs.push({
			x: Math.round(npc.container.x / tile.unit(1)),
			y: Math.round(npc.container.y / tile.unit(1))
		});
	});

	// Close menu on demand
	function close(): void {
		modalStore.close();
	}

	onMount(() => {
		elemCanvas.width = 128 * zoom; // grid cols * zoom
		elemCanvas.height = 128 * zoom; // grid rows * zoom

		// Set 2D Context
		const ctx = elemCanvas.getContext('2d');
		if (ctx) ctx.imageSmoothingEnabled = false;

		// Search for matching x/y coordinates, returns true on match
		function coordMatch(arr: any[], x: number, y: number): boolean {
			const filterMatchingX = arr.filter((coord) => coord.x === x && coord.y === y);
			return filterMatchingX.length > 0 ? true : false;
		}

		function drawRect(type: string, x: number, y: number, color: string): void {
			if (ctx === null) return;
			// Adjust for zoom
			x = x * zoom;
			y = y * zoom;
			// Local tile unit size
			let localTile = Math.round((elemCanvas.clientWidth / elemCanvas.width) * zoom);
			if (type === 'pillar') {
				localTile *= 2;
			} // 2x bigger
			ctx.beginPath();
			ctx.fillStyle = color;
			ctx.save();
			ctx.filter = `drop-shadow(0px 0px 5px black)`;
			ctx.fillRect(x, y, localTile, localTile);
			ctx.restore();
			ctx.closePath();
			ctx.fill();
		}

		// Render ---

		// Map Image
		const image = new Image(elemCanvas.width, elemCanvas.height);
		image.src = 'overworld.png';
		image.onload = () => {
			if (ctx === null) return;
			ctx.save();
			ctx.filter = 'brightness(0.75)';
			ctx.drawImage(image, 0, 0, image.width, image.height);
			ctx.restore();
			renderPoints();
		};

		// Grid Points
		function renderPoints(): void {
			// Pillars
			coordsPillars.forEach((coords: any) => {
				drawRect('pillar', coords.x, coords.y, '#f9a8d4'); // pink-300
			});
			// NPCs
			coordsNpcs.forEach((coords: any) => {
				drawRect('npc', coords.x, coords.y, '#67e8f9'); // pink-300
			});
		}

		// Handle Interaction ---

		elemCanvas.addEventListener('pointerdown', function (e) {
			const coords = onPointerDown(e);
			cameraStore.set({
				type: 'coords',
				x: coords.x,
				y: coords.y,
				targetHeight: 1,
				targetWidth: 1,
				animate: true
			});
			close(); // uncomment this when done testing
		});

		function onPointerDown(e: any) {
			const localTile = elemCanvas.clientWidth / elemCanvas.width;
			const rect = elemCanvas.getBoundingClientRect();
			const x = Math.round((e.clientX - rect.left) / localTile / zoom);
			const y = Math.round((e.clientY - rect.top) / localTile / zoom);
			return { x, y };
		}
	});
</script>

<!-- Minimap Canvas -->
<section class="w-full flex flex-col justify-center items-center space-y-4">
	<p>Tap the map to navigate anywhere instantly.</p>
	<canvas bind:this={elemCanvas} id="game" class="w-[90%] aspect-square mx-auto cursor-pointer rounded-xl shadow-xl" />
</section>
