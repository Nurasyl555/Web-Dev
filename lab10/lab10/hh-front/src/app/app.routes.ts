import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyVacaniesComponent } from './company-vacanies/company-vacanies.component';

export const routes: Routes = [
    {path: 'companies',component:CompanyListComponent},
    {path: 'companies/:id/vacancies',component:CompanyVacaniesComponent}
];
