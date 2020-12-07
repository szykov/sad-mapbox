import { ModuleWithProviders, NgModule } from '@angular/core';

import { SadlLayerComponent, SadlMapComponent } from './components';
import { ACCESS_TOKEN } from './services/sadl-map.service';

const COMPONENTS = [SadlMapComponent, SadlLayerComponent];

@NgModule({
	declarations: [COMPONENTS],
	exports: [COMPONENTS]
})
export class SadlMapboxModule {
	static withConfig(config: { accessToken: string }): ModuleWithProviders<SadlMapboxModule> {
		return {
			ngModule: SadlMapboxModule,
			providers: [
				{
					provide: ACCESS_TOKEN,
					useValue: config.accessToken
				}
			]
		};
	}
}
