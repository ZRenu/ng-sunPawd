import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCustomerModelComponent } from './system-customer-model.component';

describe('SystemCustomerModelComponent', () => {
  let component: SystemCustomerModelComponent;
  let fixture: ComponentFixture<SystemCustomerModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCustomerModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCustomerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
