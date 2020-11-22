import { IconOptions } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ICompanyName } from './company-name.interface';

import { ICompany } from './company.interface';

export interface ICompaniesService {
	getCompany(listID: number, token: string, receipt: string): Observable<ICompany>;
	getAvailableCompanies(): Observable<ICompanyName[]>;
}
