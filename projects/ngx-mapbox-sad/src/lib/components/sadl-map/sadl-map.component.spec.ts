import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadlMapComponent } from './sadl-map.component';

describe('SadlMapComponent', () => {
	let component: SadlMapComponent;
	let fixture: ComponentFixture<SadlMapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SadlMapComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SadlMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
