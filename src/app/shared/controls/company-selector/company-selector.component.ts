/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

import { ICompanyName } from '@app/interfaces';

@Component({
	selector: 'sad-company-selector',
	templateUrl: './company-selector.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CompanySelectorComponent),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySelectorComponent implements ControlValueAccessor, Validator, OnInit {
	@Input() companies: ICompanyName[] | null = null;
	public selected!: ICompanyName;
	public required!: boolean;

	public set value(value: ICompanyName) {
		this.selected = value;
		this.onChange(value);
		this.onTouch();
	}
	public get value(): ICompanyName {
		return this.selected;
	}

	onChange = (value: any): void => {};
	onTouch = (): void => {};

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {}

	public writeValue(value: ICompanyName): void {
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
