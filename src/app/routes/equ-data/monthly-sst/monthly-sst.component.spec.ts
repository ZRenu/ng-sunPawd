import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySstComponent } from './monthly-sst.component';

describe('MonthlySstComponent', () => {
  let component: MonthlySstComponent;
  let fixture: ComponentFixture<MonthlySstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
