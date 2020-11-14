import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const MATERIAL_BUNDLE = [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule];

@NgModule({
	imports: [CommonModule, MATERIAL_BUNDLE],
	exports: [MATERIAL_BUNDLE]
})
export class MaterialModule {}
