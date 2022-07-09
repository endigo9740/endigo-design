import { tile } from "$lib/stores";
import { clamp, invlerp } from "./utils";

export class Camera {
    private app: any;
    private container: any;

    public position: any = {x: 0, y: 0};
    
    // Camera Drag and Pan
    private lastDragPosition: any = null;
    
    // Camera Transition
    private startPosition: any = {x: null, y: null};
    private endPosition: any = {x: null, y: null};
    private cameraSpeed: number = 40;

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
        this.container.on('pointerup', () => this.onPointerUp());
        this.container.on('pointerout', () => this.onPointerUp());
        this.container.on('pointermove', (e: any) => this.onPointerMove(e));
    }

    // Event Handlers ---
    // Source: https://embed.plnkr.co/II6lgj511fsQ7l0QCoRi/

    onPointerDown(e: any): void {
        // console.log('pointerdown', e);
        this.lastDragPosition = { x: e.data.originalEvent.offsetX, y: e.data.originalEvent.offsetY };
    }

    onPointerUp(): void {
        // console.log('onPointerUp');
        this.lastDragPosition = null;
    }

    onPointerMove(e: any): void {
        if(this.lastDragPosition) {
            // console.log('onPointerMove', e);
            this.position.x += Math.round(e.data.originalEvent.offsetX - this.lastDragPosition.x);
            this.position.y += Math.round(e.data.originalEvent.offsetY - this.lastDragPosition.y); 
            this.lastDragPosition = { x: e.data.originalEvent.offsetX, y: e.data.originalEvent.offsetY };
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

    centerOnContainer(targetContainer: any, animate: boolean): void {
        let targetX: number;
        let targetY: number;
        // Set to target container position
        targetX = -Math.round(targetContainer.x * tile.unit(1));
        targetY = -Math.round(targetContainer.y * tile.unit(1));
        // Adjust for app screen width/height
        targetX += Math.round(this.app.screen.width / 2);
        targetY += Math.round(this.app.screen.height / 2);
        // Adjust for target width/height
        targetX -= Math.round(targetContainer.containerGameObject.width / 2);
        targetY -= Math.round(targetContainer.containerGameObject.height / 2);
        // Keep camera within world bounds
        if (animate) {
            this.setTargetPositionCoords(targetX, targetY);
        } else {
            this.position = {x: targetX, y: targetY};
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
        this.startPosition = {x: this.position.x, y: this.position.y};
        // Denote where the transition should end
        this.endPosition = {x: targetX, y: targetY};
    }

    transitionPositionCoords(axis: string): void {
        if (this.endPosition[axis] !== null) {
            // Use inverse linear interpolation to determine progress between start/end
            // This includes a clamp to prevent overshooting the target, will return 0-100%
            const progressRemaining = invlerp(this.endPosition[axis], this.startPosition[axis], this.position[axis]) * 100; // orig
            if (progressRemaining === 0) {
                // Move complete - clear and adjust for bounds
                this.startPosition[axis] = null;
                this.endPosition[axis] = null;
                this.adjustForWorldBounds(); // just in case
            } else {
                // Increase/decrease amount based on direction
                this.endPosition[axis] <= this.startPosition[axis] ? this.position[axis] -= this.cameraSpeed : this.position[axis] += this.cameraSpeed;
            }
        }
    }

    // Render ---

    render(): void {
        this.transitionPositionCoords('x');
        this.transitionPositionCoords('y');
    }

}