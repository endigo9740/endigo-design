import { GameObject } from './GameObject';

// Modals
import { type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
import ModalAbout from '$lib/components/Modals/ModalAbout.svelte';

export class Monument extends GameObject {
	private _modalStore: any;

	constructor(config: any, modalStore: any) {
		// Overwrite GameObject properties
		config.resource = 'About Chris';
		config.resource = 'entities/monument.json';
		config.animatedSpriteSettings = {
			animationSpeed: 0.05,
			width: 3,
			height: 6,
			...config.animatedSpriteSettings
		};
		config.containerSettings = {
			width: 3,
			height: 6,
			...config.containerSettings
		};
		config.interactive = true;

		// Super
		super(config);

		this._modalStore = modalStore;
	}

	// Overwrite GameObject.onPointerDown()
	onPointerDown(): void {
		this.triggerModal();
		this.animatedSprite.gotoAndStop(1);
	}

	triggerModal(): void {
		const modalComponent: ModalComponent = { ref: ModalAbout };
		this._modalStore?.trigger({ type: 'component', component: { ref: ModalAbout } });
	}
}
