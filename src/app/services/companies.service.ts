import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICompany, ICompaniesService } from '@app/interfaces';

@Injectable()
export class CompaniesService implements ICompaniesService {
	public getCompany(listID: number, token: string, receipt?: string): Observable<ICompany> {
		throw new Error('Method not implemented.');
	}
}
