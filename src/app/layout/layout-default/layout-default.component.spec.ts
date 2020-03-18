import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDefaultComponent } from './layout-default.component';

describe('LayoutDefaultComponent', () => {
  let component: LayoutDefaultComponent;
  let fixture: ComponentFixture<LayoutDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
