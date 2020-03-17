import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIndexComponent } from './menu-index.component';

describe('MenuIndexComponent', () => {
  let component: MenuIndexComponent;
  let fixture: ComponentFixture<MenuIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
