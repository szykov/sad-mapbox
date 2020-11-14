import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxMapComponent } from './components/ngx-map/ngx-map.component';
import { ACCESS_TOKEN } from './components/ngx-map/ngx-map.service';
@NgModule({
	declarations: [NgxMapComponent],
	exports: [NgxMapComponent]
})
export class NgxMapboxSadModule {
	static withConfig(config: { accessToken: string }): ModuleWithProviders<NgxMapboxSadModule> {
		return {
			ngModule: NgxMapboxSadModule,
			providers: [
				{
					provide: ACCESS_TOKEN,
					useValue: config.accessToken
				}
			]
		};
	}
}
