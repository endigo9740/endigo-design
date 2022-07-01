import { GameObject } from './GameObject';

export class Npc extends GameObject {

    private pathingProgress: number = this.grid.unit(1);
    private pathingIndex: number = 0;

    constructor(config: any) {
        super(config);
    }

    render(): void {
        if (this.paths.length > 0) { this.movement(); }
    }

    movement(): void {
        // Run Current Path
        if (this.pathingProgress >= 0) {
            // Animate
            if (this.animSprite.playing === false) { this.animSprite.play() } 
            // Pathing
            const currentPath = this.paths[this.pathingIndex];
            switch(currentPath.path) {
                case 'up': this.containerGameObject.y -= 1; break;
                case 'left': this.containerGameObject.x -= 1; break;
                case 'down': this.containerGameObject.y += 1; break;
                case 'right': this.containerGameObject.x += 1; break;
                case 'wait':
                    this.animSprite.gotoAndStop(0);
                    setTimeout(() => {}, currentPath.delay);
                    break;
            }
            this.pathingProgress -= 1;
        }
        // Switch to Next Path
        if (this.pathingProgress <= 0) {
            this.pathingProgress = this.grid.unit(1);
            (this.pathingIndex+1) >= this.paths.length ? this.pathingIndex = 0 :  this.pathingIndex++;
        }
    }

    interaction(e: any): void { console.log('NPC was clicked.'); }

}