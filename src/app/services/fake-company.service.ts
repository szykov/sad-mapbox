import { Observable, of } from 'rxjs';

import { ICompany, ICompanyService } from '../interfaces';
import { CINDY_LITTLE_COMPANY, NICHOLE_DEMO_COMPANY } from '../mock';

export class FakeCompanyService implements ICompanyService {
	constructor() {}

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
