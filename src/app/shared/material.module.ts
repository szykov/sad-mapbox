import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_BUNDLE = [
	MatButtonModule,
	MatIconModule,
	MatListModule,
	MatSelectModule,
	MatSidenavModule,
	MatToolbarModule
];

@NgModule({
	imports: [CommonModule, MATERIAL_BUNDLE],
	exports: [MATERIAL_BUNDLE]
})
export class MaterialModule {}
