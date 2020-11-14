import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxMapService } from './ngx-map.service';

@Component({
	selector: 'sadl-ngx-map',
	templateUrl: './ngx-map.component.html',
	styleUrls: ['./ngx-map.component.css'],
	providers: [NgxMapService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMapComponent implements OnInit {
	@ViewChild('container', { static: true }) mapContainer!: ElementRef;

	constructor(private mapService: NgxMapService) {}

	ngOnInit(): void {
		this.mapService.setup({
			container: this.mapContainer.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9 // starting zoom
		});
	}
}
