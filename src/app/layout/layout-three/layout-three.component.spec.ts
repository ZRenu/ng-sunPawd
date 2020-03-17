import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutThreeComponent } from './layout-three.component';

describe('LayoutThreeComponent', () => {
  let component: LayoutThreeComponent;
  let fixture: ComponentFixture<LayoutThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
