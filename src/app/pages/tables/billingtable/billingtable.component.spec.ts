import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillingtableComponent } from './billingtable.component';

describe('AdvancedtableComponent', () => {
  let component: BillingtableComponent;
  let fixture: ComponentFixture<BillingtableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
