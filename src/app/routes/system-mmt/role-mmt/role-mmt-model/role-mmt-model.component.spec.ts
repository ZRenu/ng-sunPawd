import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMmtModelComponent } from './role-mmt-model.component';

describe('RoleMmtModelComponent', () => {
  let component: RoleMmtModelComponent;
  let fixture: ComponentFixture<RoleMmtModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMmtModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMmtModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
