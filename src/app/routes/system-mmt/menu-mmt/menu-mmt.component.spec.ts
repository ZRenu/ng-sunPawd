import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMmtComponent } from './menu-mmt.component';

describe('MenuMmtComponent', () => {
  let component: MenuMmtComponent;
  let fixture: ComponentFixture<MenuMmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
