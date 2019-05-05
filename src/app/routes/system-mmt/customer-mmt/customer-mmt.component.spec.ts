import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMmtComponent } from './customer-mmt.component';

describe('CustomerMmtComponent', () => {
  let component: CustomerMmtComponent;
  let fixture: ComponentFixture<CustomerMmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
