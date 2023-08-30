import { GameObject } from './GameObject';

// Modals
import { type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
import ModalProject from '$lib/components/Modals/ModalProject.svelte';

export class Pillar extends GameObject {
	private _modalStore: any;
	public found: boolean = false;
	public page: any;

	constructor(config: any, modalStore: any) {
		// Overwrite GameObject properties
		config.resource = 'entities/pillar.json';
		config.animatedSpriteSettings = {
			animationSpeed: 0.4,
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

		// Per Instance Settings
		this._modalStore = modalStore;
		this.page = config.page;
	}

	// Overwrite GameObject.onPointerDown()
	onPointerDown(): void {
		this.found = true;
		// pageModalStore.set(this.page);
		this.triggerModal(this.page);
		this.animatedSprite.play();
	}

	triggerModal(pageData: any): void {
		const modalComponent: ModalComponent = { ref: ModalProject, props: { data: pageData } };
		this._modalStore?.trigger({ type: 'component', component: modalComponent });
	}
}
