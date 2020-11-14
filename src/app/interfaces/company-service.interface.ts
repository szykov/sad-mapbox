import { Observable } from 'rxjs';

import { ICompany } from './company.interface';

export interface ICompanyService {
	getCompany(listID: number, token: string, receipt: string): Observable<ICompany>;
}
