import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyLogoComponent } from './single-company-logo.component';

describe('SingleCompanyLogoComponent', () => {
  let component: SingleCompanyLogoComponent;
  let fixture: ComponentFixture<SingleCompanyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
