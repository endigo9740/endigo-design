export class Camera {
    public offset: any = {x: 0, y: 0};
    
    private app: any;
    private container: any;
    private world: any;

    private isDragging: boolean = false;
    private startPan: any = {x: 0, y: 0};
    private netPan: any = {x: 0, y: 0};

    constructor(config: any) {
        this.app = config.app;
        this.container = config.container;
        this.world = config.world;
    }

    init(): void {
        // Handle Interaction
        this.container.interactive = true;
        this.container.on('pointerdown', (e: any) => this.onPointerDown(e));
        this.container.on('pointerup', () => this.onPointerUp());
        this.container.on('pointerout', () => this.onPointerOut());
        this.container.on('pointermove', (e: any) => this.onPointerMove(e));
    }

    centerOnWorld(): void {
        this.offset.x = -Math.ceil((this.world.sprite.width - this.app.screen.width) / 2);
        this.offset.y = -Math.ceil((this.world.sprite.height - this.app.screen.height) / 2);
    }

    centerOnTarget(targetContainer: any): void {
        // Set to target container grid position
        this.offset.x = -Math.ceil(targetContainer.x * (16*3));
        this.offset.y = -Math.ceil(targetContainer.y * (16*3));
        // Adjust for screen width/height
        this.offset.x += Math.ceil(this.app.screen.width / 2);
        this.offset.y += Math.ceil(this.app.screen.height / 2);
        // Adjust for target width/height
        this.offset.x -= Math.ceil(targetContainer.containerGameObject.width / 2);
        this.offset.y -= Math.ceil(targetContainer.containerGameObject.height / 2);
    }

    reset(): void {
        this.startPan = {x: 0, y: 0};
        this.netPan = {x: 0, y: 0};
    }

    onPointerDown(e: any): void {
        // console.log('pointerdown', e);
        this.startPan = {
            x: e.data.global.x - this.offset.x,
            y: e.data.global.y - this.offset.y
        };
        this.isDragging = true;
    }

    onPointerUp(): void {
        // console.log('pointerup', e);
        this.isDragging = false;
        this.reset();
    }

    onPointerOut(): void {
        // console.log('pointerout', e);
        this.isDragging = false;
        this.reset();
    }

    onPointerMove(e: any): void {
        // console.log('pointermove', e);
    
        // Only proceed if dragging
        if (!this.isDragging) { return; }
    
        // Get current mouse position
        let currentX = e.data.global.x - this.offset.x;
        let currentY = e.data.global.y - this.offset.y;
    
        // Distance the mouse has moved since the last move event
        let distanceX: number = currentX - this.startPan.x;
        let distanceY: number = currentY - this.startPan.y;
    
        // Reset the vars for next move event
        this.startPan = {x: currentX, y: currentY};
    
        // Accumulate the net panning done
        this.netPan.x += distanceX;
        this.netPan.y += distanceY;
    
        // Update Offset X/Y
        this.offset.x += this.netPan.x;
        this.offset.y += this.netPan.y;
    
        // Lock camera within world bounds
        if (this.offset.x >= 0) { this.offset.x = 0; } // left
        if (this.offset.y >= 0) { this.offset.y = 0; } // top
        const maxOffsetX = this.container.width - this.app.screen.width;
        const maxOffsetY = this.container.height - this.app.screen.height;
        if (this.offset.x <= -maxOffsetX) { this.offset.x = -maxOffsetX; } // right
        if (this.offset.y <= -maxOffsetY) { this.offset.y = -maxOffsetY; } // bottom
    }

}