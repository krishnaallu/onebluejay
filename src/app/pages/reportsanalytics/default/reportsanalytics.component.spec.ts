import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportAnalyticsComponent } from './reportsanalytics.component';

describe('DefaultComponent', () => {
  let component: ReportAnalyticsComponent;
  let fixture: ComponentFixture<ReportAnalyticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
