import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMapComponent } from './ngx-map.component';

describe('NgxMapComponent', () => {
	let component: NgxMapComponent;
	let fixture: ComponentFixture<NgxMapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NgxMapComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
