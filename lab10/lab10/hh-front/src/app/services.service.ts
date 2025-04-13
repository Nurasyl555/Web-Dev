import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './core/model/company';
import { Vacancy } from './core/model/vacancy';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private BASE_URL = '/api';



  constructor(private http:HttpClient) {}

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);

  }
  getCompanyVacancies(companyId:number):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);

  }
}
