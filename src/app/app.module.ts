import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './app-store.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		SharedModule,
		CoreModule,
		AppStoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
