import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRoleComponent } from './right-role.component';

describe('RightRoleComponent', () => {
  let component: RightRoleComponent;
  let fixture: ComponentFixture<RightRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
