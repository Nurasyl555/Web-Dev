import { Component, Input, OnChanges } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy.model';

@Component({
  standalone: true,
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.companyService.getCompanyVacancies(this.companyId).subscribe(data => {
        this.vacancies = data;
      });
    }
  }
}
