import { ModuleWithProviders, NgModule } from '@angular/core';

import { SadlMapComponent } from './components/sadl-map/sadl-map.component';
import { ACCESS_TOKEN } from './sadl-map.service';
import { SadlLayerComponent } from './components/sadl-layer/sadl-layer.component';

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
