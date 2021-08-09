import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultAnalyticsComponent } from './analytics.component';

describe('DefaultComponent', () => {
  let component: DefaultAnalyticsComponent;
  let fixture: ComponentFixture<DefaultAnalyticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
