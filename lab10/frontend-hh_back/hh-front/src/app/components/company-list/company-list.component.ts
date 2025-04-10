import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { VacancyListComponent } from "../vacancy-list/vacancy-list.component";

@Component({
  standalone: true,
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  imports: [VacancyListComponent],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onSelectCompany(companyId: number) {
    this.selectedCompanyId = companyId;
  }
}
