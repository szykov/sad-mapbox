import { TestBed } from '@angular/core/testing';

import { NgxMapboxSadService } from './ngx-mapbox-sad.service';

describe('NgxMapboxSadService', () => {
	let service: NgxMapboxSadService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgxMapboxSadService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
