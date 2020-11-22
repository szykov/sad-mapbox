import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, RootStoreConfig, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

const configWithRuntimeChecks: RootStoreConfig<unknown, Action> = {
	runtimeChecks: {
		strictStateImmutability: true,
		strictActionImmutability: true,
		strictStateSerializability: true,
		strictActionSerializability: false
	}
};

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot({}, environment.production ? {} : configWithRuntimeChecks),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production // Restrict extension to log-only mode
		})
	]
})
export class AppStoreModule {}
