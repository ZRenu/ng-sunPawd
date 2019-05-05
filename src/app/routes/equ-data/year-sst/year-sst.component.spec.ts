import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSstComponent } from './year-sst.component';

describe('YearSstComponent', () => {
  let component: YearSstComponent;
  let fixture: ComponentFixture<YearSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
