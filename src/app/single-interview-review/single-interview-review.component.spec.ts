import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInterviewReviewComponent } from './single-interview-review.component';

describe('SingleInterviewReviewComponent', () => {
  let component: SingleInterviewReviewComponent;
  let fixture: ComponentFixture<SingleInterviewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInterviewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInterviewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
