import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBtnsComponent } from './dw-btns.component';

describe('DwBtnsComponent', () => {
  let component: DwBtnsComponent;
  let fixture: ComponentFixture<DwBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
