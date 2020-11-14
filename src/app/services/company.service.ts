import { Observable } from 'rxjs';

import { ICompany, ICompanyService } from '../interfaces';

export class CompanyService implements ICompanyService {
	constructor() {}

	public getCompany(listID: number, token: string, receipt: string): Observable<ICompany> {
		throw new Error('Method not implemented.');
	}
}
