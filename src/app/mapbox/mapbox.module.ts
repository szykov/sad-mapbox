import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapboxRoutingModule } from './mapbox-routing.module';
import { MapboxComponent } from './mapbox.component';

import { NgxMapboxSadModule } from 'projects/ngx-mapbox-sad/src/public-api';

@NgModule({
	declarations: [MapboxComponent],
	imports: [CommonModule, MapboxRoutingModule, NgxMapboxSadModule.withConfig({ accessToken: 'SoL71Zyf7SmLrVYWC7fQ' })]
})
export class MapboxModule {}
