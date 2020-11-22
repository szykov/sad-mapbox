import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesEffects } from './effects';
import { metaReducers, reducers } from './reducers';
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
	},
	metaReducers: metaReducers
};

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot(reducers, !environment.production ? configWithRuntimeChecks : {}),
		EffectsModule.forRoot([CompaniesEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production // Restrict extension to log-only mode
		})
	]
})
export class AppStoreModule {}
