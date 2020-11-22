import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICompany, ICompaniesService } from '@app/interfaces';
import { ICompanyName } from '@app/interfaces/company-name.interface';

@Injectable()
export class CompaniesService implements ICompaniesService {
	public getAvailableCompanies(): Observable<ICompanyName[]> {
		throw new Error('Method not implemented.');
	}
	public getCompany(listID: number, token: string, receipt?: string): Observable<ICompany> {
		throw new Error('Method not implemented.');
	}
}
