import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { RootLayoutComponent } from './containers/root-layout/root-layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { CompaniesService, FakeCompaniesService } from '@app/services';

@NgModule({
	declarations: [RootLayoutComponent, TopbarComponent, LeftbarComponent],
	imports: [CommonModule, SharedModule],
	exports: [RootLayoutComponent],
	providers: [{ provide: CompaniesService, useClass: FakeCompaniesService }]
})
export class CoreModule {}
