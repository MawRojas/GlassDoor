import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeReviewComponent } from './single-employee-review.component';

describe('SingleEmployeeReviewComponent', () => {
  let component: SingleEmployeeReviewComponent;
  let fixture: ComponentFixture<SingleEmployeeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmployeeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmployeeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
