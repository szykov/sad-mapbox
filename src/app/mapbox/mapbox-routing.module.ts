import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapboxComponent } from './components/mapbox.component';

const routes: Routes = [{ path: '', component: MapboxComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MapboxRoutingModule {}
