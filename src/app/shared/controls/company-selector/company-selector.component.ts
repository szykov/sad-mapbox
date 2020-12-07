/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	forwardRef,
	ChangeDetectorRef,
	ViewEncapsulation
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

import { ICompanyName } from '@app/interfaces';

@Component({
	selector: 'sad-company-selector',
	templateUrl: './company-selector.component.html',
	styleUrls: ['./company-selector.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CompanySelectorComponent),
			multi: true
		}
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySelectorComponent implements ControlValueAccessor, Validator, OnInit {
	@Input() companies: ICompanyName[] | null = null;

	public required = false;
	private _value: ICompanyName[] = [];

	public set value(value: ICompanyName[]) {
		this._value = value;
		this.onChange(value);
		this.onTouch();
	}
	public get value(): ICompanyName[] {
		return this._value || [];
	}

	onChange = (value: any): void => {};
	onTouch = (): void => {};

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {}

	public writeValue(value: ICompanyName[]): void {
		this.value = value;
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	validate(control: AbstractControl): ValidationErrors | null {
		if (this.required && !control.value) {
			return { required: { valid: false } };
		}
		return null;
	}
}
