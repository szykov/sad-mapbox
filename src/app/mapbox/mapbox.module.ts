import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './effects';
import { reducers } from './reducers';

import { MapboxRoutingModule } from './mapbox-routing.module';
import { MapboxComponent } from './containers/mapbox.component';

import { SadlMapboxModule } from '@ngx-mapbox-sad/public-api';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [MapboxComponent],
	imports: [
		CommonModule,
		MapboxRoutingModule,
		SadlMapboxModule.withConfig({ accessToken: environment.mapbox.accessToken }),
		StoreModule.forFeature('map', reducers),
		EffectsModule.forFeature([CompaniesEffects])
	]
})
export class MapboxModule {}
