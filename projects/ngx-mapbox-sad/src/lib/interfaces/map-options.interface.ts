import { ISadlMapInput } from './map-input.interface';

export interface ISadlMapOptions extends ISadlMapInput {
	container: string | HTMLElement;
}
