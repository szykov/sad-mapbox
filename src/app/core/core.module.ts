import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RootLayoutComponent } from './containers/root-layout/root-layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { CompanyService } from '../services/company.service';
import { FakeCompanyService } from '../services/fake-company.service';

@NgModule({
	declarations: [RootLayoutComponent, TopbarComponent, LeftbarComponent],
	imports: [CommonModule, SharedModule],
	exports: [RootLayoutComponent],
	providers: [{ provide: CompanyService, useClass: FakeCompanyService }]
})
export class CoreModule {}
