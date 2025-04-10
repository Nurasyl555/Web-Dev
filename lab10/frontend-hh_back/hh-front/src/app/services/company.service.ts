import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://127.0.0.1:8000/api/companies/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.BASE_URL);
  }

  getCompanyVacancies(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}${companyId}/vacancies/`);
  }
}
