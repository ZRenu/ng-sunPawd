import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMmtComponent } from './role-mmt.component';

describe('RoleMmtComponent', () => {
  let component: RoleMmtComponent;
  let fixture: ComponentFixture<RoleMmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
