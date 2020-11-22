import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapboxRoutingModule } from './mapbox-routing.module';
import { MapboxComponent } from './mapbox.component';

import { SadlMapboxModule } from '@ngx-mapbox-sad/public-api';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [MapboxComponent],
	imports: [
		CommonModule,
		MapboxRoutingModule,
		SadlMapboxModule.withConfig({ accessToken: environment.mapbox.accessToken })
	]
})
export class MapboxModule {}
