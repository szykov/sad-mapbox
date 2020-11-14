import { TestBed } from '@angular/core/testing';

import { NgxMapService } from './ngx-map.service';

describe('NgxMapService', () => {
	let service: NgxMapService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgxMapService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
