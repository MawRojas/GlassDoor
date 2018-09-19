import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyPhotosComponent } from './single-company-photos.component';

describe('SingleCompanyPhotosComponent', () => {
  let component: SingleCompanyPhotosComponent;
  let fixture: ComponentFixture<SingleCompanyPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
