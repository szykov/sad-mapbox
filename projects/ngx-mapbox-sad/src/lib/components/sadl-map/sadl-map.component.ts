import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { SadlMapInput, SadlMapOptions } from '../../intefaces';
import { SadlMapService } from './sadl-map.service';

@Component({
	selector: 'sadl-map',
	templateUrl: './sadl-map.component.html',
	styleUrls: ['./sadl-map.component.css'],
	providers: [SadlMapService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SadlMapComponent implements OnInit {
	@ViewChild('container', { static: true }) mapContainer!: ElementRef;
	@Input() options: SadlMapInput | undefined;

	constructor(private SadlMapService: SadlMapService) {}

	ngOnInit(): void {
		let options = { ...this.options } as SadlMapOptions;
		options.container = this.mapContainer.nativeElement;
		this.SadlMapService.setup(options);
	}
}
