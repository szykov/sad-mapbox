import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnChanges,
	OnInit,
	SimpleChange,
	SimpleChanges,
	ViewChild
} from '@angular/core';

import { SadlMapInput, SadlMarkerInput } from '@ngx-mapbox-sad/lib/types';
import { ISadlMapOptions, ISadlMarkerOptions, ISadlGeoLocation } from '@ngx-mapbox-sad/lib/interfaces';

import { SadlMapService } from './sadl-map.service';
import { SadlMapOptionsModel, SadlMarkerOptionsModel } from '@ngx-mapbox-sad/lib/models';

@Component({
	selector: 'sadl-map',
	templateUrl: './sadl-map.component.html',
	styleUrls: ['./sadl-map.component.css'],
	providers: [SadlMapService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SadlMapComponent implements OnInit, OnChanges {
	@ViewChild('container', { static: true }) mapContainer!: ElementRef;
	@Input() options: SadlMapInput | undefined;
	@Input() markers: SadlMarkerInput | undefined;

	constructor(private sadlMapService: SadlMapService) {}

	ngOnInit(): void {
		if (!this.options) {
			throw new Error('Options should be specififed');
		}

		let options: ISadlMapOptions | undefined = {
			container: this.mapContainer.nativeElement,
			style: this.options.style,
			center: this.options.center ? [this.options.center.longitude, this.options.center.latitude] : undefined,
			zoom: this.options.zoom
		};

		this.sadlMapService.setup(new SadlMapOptionsModel(options));
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.isValueChanged(changes.markers)) {
			this.sadlMapService.removeAllMarkers();

			let locations: ISadlGeoLocation[] = changes.markers.currentValue.locations;
			let options: ISadlMarkerOptions = changes.markers.currentValue.options;

			locations.forEach((location: ISadlGeoLocation) => {
				this.sadlMapService.addMarker(location, new SadlMarkerOptionsModel(options));
			});

			this.sadlMapService.fitMarkerBounds();
		}

		if (this.isValueChanged(changes.options)) {
			let current: SadlMapInput = changes.options.currentValue;
			let previous: SadlMapInput = changes.options.previousValue;
			if (current.center && current.center !== previous.center)
				this.sadlMapService.flyTo(current.center, current.zoom);
		}
	}

	private isValueChanged(change: SimpleChange): boolean {
		return change && !change.isFirstChange() && change.currentValue !== change.previousValue;
	}
}
