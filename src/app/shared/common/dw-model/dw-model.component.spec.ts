import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwModelComponent } from './dw-model.component';

describe('DwModelComponent', () => {
  let component: DwModelComponent;
  let fixture: ComponentFixture<DwModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
