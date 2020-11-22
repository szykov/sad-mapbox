import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CompanySelectorComponent, MenuActionListComponent } from './controls';

const CONTROLS = [CompanySelectorComponent, MenuActionListComponent];

@NgModule({
	declarations: [CONTROLS],
	imports: [CommonModule, FormsModule, MaterialModule],
	exports: [FormsModule, MaterialModule, CONTROLS]
})
export class SharedModule {}
