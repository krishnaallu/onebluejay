import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsurancetableComponent } from './insurancetable.component';

describe('AdvancedtableComponent', () => {
  let component: InsurancetableComponent;
  let fixture: ComponentFixture<InsurancetableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
