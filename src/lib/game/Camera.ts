import { tile } from "$lib/stores";

export class Camera {
    public offset: any = {x: 0, y: 0};
    
    private app: any;
    private container: any;

    private lastPos: any = null;

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
        this.lastPos = { x: e.data.originalEvent.offsetX, y: e.data.originalEvent.offsetY };
    }

    onPointerUp(): void {
        // console.log('onPointerUp');
        this.lastPos = null;
    }

    onPointerMove(e: any): void {
        if(this.lastPos) {
            // console.log('onPointerMove', e);
            this.offset.x += (e.data.originalEvent.offsetX - this.lastPos.x);
            this.offset.y += (e.data.originalEvent.offsetY - this.lastPos.y);  
            this.lastPos = { x: e.data.originalEvent.offsetX, y: e.data.originalEvent.offsetY };
            // Keep camera within world bounds
            this.adjustForWorldBounds();
        }
    }

    // Utilities ---

    centerOnContainer(targetContainer: any): void {
        // Set to target container position
        this.offset.x = -Math.round(targetContainer.x * tile.unit(1));
        this.offset.y = -Math.round(targetContainer.y * tile.unit(1));
        // Adjust for app screen width/height
        this.offset.x += Math.round(this.app.screen.width / 2);
        this.offset.y += Math.round(this.app.screen.height / 2);
        // Adjust for target width/height
        this.offset.x -= Math.round(targetContainer.containerGameObject.width / 2);
        this.offset.y -= Math.round(targetContainer.containerGameObject.height / 2);
        // Keep camera within world bounds
        this.adjustForWorldBounds();
    }

    adjustForWorldBounds(): void {
        const maxOffsetX = this.container.width - this.app.screen.width;
        const maxOffsetY = this.container.height - this.app.screen.height;
        // Per Boundry
        if (this.offset.x >= 0) { this.offset.x = 0; } // left
        if (this.offset.y >= 0) { this.offset.y = 0; } // top
        if (this.offset.x <= -maxOffsetX) { this.offset.x = -maxOffsetX; } // right
        if (this.offset.y <= -maxOffsetY) { this.offset.y = -maxOffsetY; } // bottom
    }

}