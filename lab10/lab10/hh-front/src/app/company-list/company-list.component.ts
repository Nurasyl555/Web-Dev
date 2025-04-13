import { Component,OnInit} from '@angular/core';
import {Company} from '../core/model/company'
import { NgForOf } from '@angular/common';
import {ServicesService} from '../services.service'
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-list',
  imports: [NgForOf],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companies:Company[] = [];
  constructor(private servicesService:ServicesService,private router:Router ){


  }
  ngOnInit():void{
    this.servicesService.getCompanies().subscribe(data=>{
      this.companies = data;
    });
  }
  goToVacancies(companyId:number):void{
    this.router.navigate([`/companies/${companyId}/vacancies`]);
  }

}
