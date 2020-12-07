import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';

import { LayerType } from '@ngx-mapbox-sad/lib/enums';
import { ISadlGeoLocation } from '@ngx-mapbox-sad/lib/interfaces';
import { SadlLayerOptionsModel } from '@ngx-mapbox-sad/lib/models';
import { SadlMapService } from '@ngx-mapbox-sad/lib/services';

@Component({
	selector: 'sadl-layer',
	template: '',
	styleUrls: ['./sadl-layer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SadlLayerComponent implements OnInit, OnDestroy {
	@Input() id!: string;
	@Input() type!: LayerType;
	@Input() locations!: ISadlGeoLocation[];

	constructor(private mapService: SadlMapService) {}

	ngOnInit(): void {
		if (!this.id || !this.type || !this.locations) throw new Error('All inputs are required');

		this.mapService.addLayer(
			new SadlLayerOptionsModel({ id: this.id, type: this.type, locations: this.locations })
		);
	}

	ngOnDestroy(): void {
		this.mapService.removeLayer(this.id);
	}
}
