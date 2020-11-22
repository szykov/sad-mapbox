import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ICompany, ICompaniesService } from '@app/interfaces';
import { CINDY_LITTLE_COMPANY, NICHOLE_DEMO_COMPANY } from '@app/mock';
import { ICompanyName } from '@app/interfaces/company-name.interface';

@Injectable()
export class FakeCompaniesService implements ICompaniesService {
	public getAvailableCompanies(): Observable<ICompanyName[]> {
		let companies = [
			{ description: 'Demo Account', id: 5638557 },
			{ description: 'Apartment Agents', id: 5363950 }
		];
		return of(companies);
	}

	public getCompany(listID: number, token: string, receipt?: string): Observable<ICompany> {
		switch (listID) {
			case 5638557:
				return of(NICHOLE_DEMO_COMPANY);
			case 5363950:
				return of(CINDY_LITTLE_COMPANY);
			default:
				return of();
		}
	}
}
