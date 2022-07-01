import { GameObject } from './GameObject';

export class Npc extends GameObject {

    private movementProgress: number = this.grid.unit(1);
    private movementIndex: number = 0;

    constructor(config: any) {
        super(config);
    }

    render(): void {
        if (this.paths.length > 0) { this.movement(); }
    }

    movement(): void {
        // Current Animation
        if (this.movementProgress >= 0) {
            const currentPath = this.paths[this.movementIndex];
            switch(currentPath.path) {
                case 'up': this.containerGameObject.y -= 1; break;
                case 'left': this.containerGameObject.x -= 1; break;
                case 'down': this.containerGameObject.y += 1; break;
                case 'right': this.containerGameObject.x += 1; break;
                case 'wait': setTimeout(() => {}, currentPath.delay); break;
            }
            this.movementProgress -= 1;
        }
        // Next Animation
        if (this.movementProgress <= 0) {
            this.movementProgress = this.grid.unit(1);
            (this.movementIndex+1) >= this.paths.length ? this.movementIndex = 0 :  this.movementIndex++;
        }
    }

    interaction(e: any): void { console.log('NPC was clicked.'); }

}