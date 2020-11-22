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

import {
	ISadlGeoLocation,
	ISadlMarkerInput,
	ISadlMapInput,
	ISadlMapOptions,
	ISadlMarkerOptions,
	ISadlFlyToInput
} from '@ngx-mapbox-sad/lib/interfaces';
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
	@Input() options!: ISadlMapInput;
	@Input() markers!: ISadlMarkerInput;
	@Input() flyTo!: ISadlFlyToInput;

	constructor(private SadlMapService: SadlMapService) {}

	ngOnInit(): void {
		let options = ({ ...this.options } as ISadlMapOptions) || {};
		options.container = this.mapContainer.nativeElement;
		this.SadlMapService.setup(options);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.isValueChanged(changes.markers)) {
			this.SadlMapService.removeAllMarkers();

			let options: ISadlMarkerOptions = changes.markers.currentValue.options;
			changes.markers.currentValue.locations.forEach((location: ISadlGeoLocation) => {
				this.SadlMapService.addMarker(location, options);
			});
		}

		if (this.isValueChanged(changes.flyTo)) {
			this.SadlMapService.flyTo(changes.flyTo.currentValue);
		}
	}

	private isValueChanged(change: SimpleChange): boolean {
		return change && !change.isFirstChange() && change.currentValue !== change.previousValue;
	}
}
