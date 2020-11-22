/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

import { IMenuAction } from '@app/interfaces';
import { MenuAction } from '@app/shared/common';

@Component({
	selector: 'sad-menu-action-list',
	templateUrl: './menu-action-list.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => MenuActionListComponent),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuActionListComponent implements ControlValueAccessor, Validator, OnInit {
	@Input() actions: IMenuAction[] | null = null;
	public selected!: MenuAction;
	public required!: boolean;

	public set value(value: MenuAction) {
		this.selected = value;
		this.onChange(value);
		this.onTouch();
	}
	public get value(): MenuAction {
		return this.selected;
	}

	onChange = (value: any): void => {};
	onTouch = (): void => {};

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {}

	public writeValue(value: MenuAction): void {
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
