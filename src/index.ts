import { MdInput } from './resources/custom-elements/md-input/md-input';
import { IContainer, DI, IRegistry } from '@aurelia/kernel';

export { MdInput };

export const DefaultResources: IRegistry[] = [
  MdInput as unknown as IRegistry
];

export const BridgeConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
	register(container: IContainer): IContainer {
		return container.register(...DefaultResources);
	},
  /**
   * Create a new container with this configuration applied to it.
   */
	createContainer(): IContainer {
		return this.register(DI.createContainer());
	}
};
