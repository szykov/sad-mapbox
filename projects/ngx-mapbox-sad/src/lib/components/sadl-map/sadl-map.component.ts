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

import { SadlFlyToInput, SadlMapInput, SadlMarkerInput } from '@ngx-mapbox-sad/lib/types';
import { ISadlMapOptions, ISadlMarkerOptions, ISadlGeoLocation, ISadlFlyTo } from '@ngx-mapbox-sad/lib/interfaces';

import { SadlMapService } from './sadl-map.service';

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

	constructor(private SadlMapService: SadlMapService) {}

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

		this.SadlMapService.setup(options);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.isValueChanged(changes.markers)) {
			this.SadlMapService.removeAllMarkers();

			let locations: ISadlGeoLocation[] = changes.markers.currentValue.locations;
			let options: ISadlMarkerOptions = changes.markers.currentValue.options;

			locations.forEach((location: ISadlGeoLocation) => {
				this.SadlMapService.addMarker(location, options);
			});

			this.SadlMapService.fitMarkerBounds();
		}

		if (this.isValueChanged(changes.options)) {
			let options = { ...changes.options.currentValue } as SadlMapInput;
			options.center && this.SadlMapService.flyTo(options.center, options.zoom);
		}
	}

	private isValueChanged(change: SimpleChange): boolean {
		return change && !change.isFirstChange() && change.currentValue !== change.previousValue;
	}
}
