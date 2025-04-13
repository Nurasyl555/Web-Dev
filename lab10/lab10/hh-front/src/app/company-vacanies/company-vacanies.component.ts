import { NgForOf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Vacancy } from '../core/model/vacancy';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-company-vacanies',
  imports: [NgForOf],
  templateUrl: './company-vacanies.component.html',
  styleUrl: './company-vacanies.component.css'
})
export class CompanyVacaniesComponent {
  vacancies:Vacancy[]=[];
  companyId!:number;
  constructor(private route:ActivatedRoute,private serviceService:ServicesService){}

  ngOnInit():void{
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceService.getCompanyVacancies(this.companyId).subscribe(data =>{
      this.vacancies = data;
    });
  }
}
