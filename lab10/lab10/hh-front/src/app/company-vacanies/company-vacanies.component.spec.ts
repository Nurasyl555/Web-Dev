import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacaniesComponent } from './company-vacanies.component';

describe('CompanyVacaniesComponent', () => {
  let component: CompanyVacaniesComponent;
  let fixture: ComponentFixture<CompanyVacaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyVacaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
