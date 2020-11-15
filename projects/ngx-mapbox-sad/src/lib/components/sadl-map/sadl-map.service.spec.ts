import { TestBed } from '@angular/core/testing';

import { SadlMapService } from './sadl-map.service';

describe('SadlMapService', () => {
	let service: SadlMapService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SadlMapService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
