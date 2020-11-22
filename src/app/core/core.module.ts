import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { CompaniesService, FakeCompaniesService } from '@app/services';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, SharedModule],
	exports: [LayoutComponent],
	providers: [{ provide: CompaniesService, useClass: FakeCompaniesService }]
})
export class CoreModule {}
