import { ModuleWithProviders, NgModule } from '@angular/core';

import { SadlMapComponent } from './components/sadl-map/sadl-map.component';
import { ACCESS_TOKEN } from './components/sadl-map/sadl-map.service';
@NgModule({
	declarations: [SadlMapComponent],
	exports: [SadlMapComponent]
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
