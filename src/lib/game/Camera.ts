import { clamp, invlerp } from './utils';
import { cameraStore, tile } from '$lib/game/stores';

export class Camera {
	private app: any;
	private container: any;

	public position: any = { x: 0, y: 0 };

	// Camera Drag and Pan
	private lastDragPosition: any = null;

	// Camera Transition
	private startPosition: any = { x: null, y: null };
	private endPosition: any = { x: null, y: null };
	private cameraSpeed: number = 25;

	constructor(config: any) {
		this.app = config.app;
		this.container = config.container;
		// Init
		this.onInit();
	}

	onInit(): void {
		// Enable interactivity
		this.container.interactive = true;
		// Handle dragging events
		this.container.on('pointerdown', (e: any) => this.onPointerDown(e));
		this.container.on('pointerup', (e: any) => this.onPointerUp(e));
		this.container.on('pointerout', (e: any) => this.onPointerUp(e));
		this.container.on('pointermove', (e: any) => this.onPointerMove(e));
		// Center on Provided Targets
		cameraStore.subscribe((val: any) => {
			if (val === undefined) return;
			// Bus based on type
			switch (val.type) {
				case 'entity':
					this.centerOnGameObject({ target: val.target, animate: val.animate });
					break;
				case 'coords':
					this.centerOnCoords({
						x: val.x * tile.unit(1),
						y: val.y * tile.unit(1),
						targetHeight: val.targetHeight * tile.unit(1),
						targetWidth: val.targetWidth * tile.unit(1),
						animate: val.animate
					});
					break;
				default:
					console.error('Unknown cameraStore type');
					break;
			}
			// Clear
			cameraStore.set(undefined);
		});
	}

	// Event Handlers ---
	// Source: https://embed.plnkr.co/II6lgj511fsQ7l0QCoRi/

	onPointerDown(e: any): void {
		// console.log('-pointerdown-', e);
		this.lastDragPosition = { x: e.data.global.x, y: e.data.global.y };
	}

	onPointerUp(e: any): void {
		// console.log('-onPointerUp-', e);
		this.lastDragPosition = null;
	}

	onPointerMove(e: any): void {
		if (this.lastDragPosition) {
			// console.log('onPointerMove', e);
			this.position.x += Math.round(e.data.global.x - this.lastDragPosition.x);
			this.position.y += Math.round(e.data.global.y - this.lastDragPosition.y);
			this.lastDragPosition = { x: e.data.global.x, y: e.data.global.y };
			this.adjustForWorldBounds();
		}
	}

	// Utilities ---

	adjustForWorldBounds(): void {
		const maxPosX = this.container.width - this.app.screen.width;
		const maxPosY = this.container.height - this.app.screen.height;
		this.position.x = clamp(this.position.x, -maxPosX, 0); // left/right
		this.position.y = clamp(this.position.y, -maxPosY, 0); // top/bottom
	}

	centerOnGameObject(settings: any): void {
		this.centerOnCoords({
			x: settings.target.container.x,
			y: settings.target.container.y,
			targetWidth: settings.target.container.width,
			targetHeight: settings.target.container.height,
			animate: settings.animate
		});
	}

	centerOnCoords(settings: any): void {
		let targetX: number;
		let targetY: number;
		// Set to target container position
		targetX = -Math.round(settings.x);
		targetY = -Math.round(settings.y);
		// Adjust for app screen width/height
		targetX += Math.round(this.app.screen.width / 2);
		targetY += Math.round(this.app.screen.height / 2);
		// Adjust for midpoint of target's width/height
		targetX -= Math.round(settings.targetHeight / 2);
		targetY -= Math.round(settings.targetWidth / 2);
		// Keep camera within world bounds
		if (settings.animate) {
			this.setTargetPositionCoords(targetX, targetY);
		} else {
			this.position = { x: targetX, y: targetY };
			this.adjustForWorldBounds();
		}
	}

	setTargetPositionCoords(targetX: number, targetY: number): void {
		// Ensure target keeps camera within world bounds
		const maxPosX = this.container.width - this.app.screen.width;
		const maxPosY = this.container.height - this.app.screen.height;
		targetX = clamp(targetX, -maxPosX, 0); // left/right
		targetY = clamp(targetY, -maxPosY, 0); // top/bottom
		// Record where the transition starts
		this.startPosition = { x: this.position.x, y: this.position.y };
		// Denote where the transition should end
		this.endPosition = { x: targetX, y: targetY };
	}

	transitionPositionCoords(axis: string): void {
		if (this.endPosition[axis] !== null) {
			// Use inverse linear interpolation to determine progress between start/end
			// This includes a clamp to prevent overshooting the target, will return 0-100%
			const progressRemaining = invlerp(this.endPosition[axis], this.startPosition[axis], this.position[axis]) * 100;
			if (progressRemaining === 0) {
				// Move complete - clear and adjust for bounds
				this.startPosition[axis] = null;
				this.endPosition[axis] = null;
				this.adjustForWorldBounds(); // just in case
			} else {
				// Increase/decrease amount based on direction
				this.endPosition[axis] <= this.startPosition[axis]
					? (this.position[axis] -= this.cameraSpeed)
					: (this.position[axis] += this.cameraSpeed);
			}
		}
	}

	// Render ---

	render(): void {
		this.transitionPositionCoords('x');
		this.transitionPositionCoords('y');
	}
}
