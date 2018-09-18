import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewReviewComponent } from './interview-review.component';

describe('InterviewReviewComponent', () => {
  let component: InterviewReviewComponent;
  let fixture: ComponentFixture<InterviewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
