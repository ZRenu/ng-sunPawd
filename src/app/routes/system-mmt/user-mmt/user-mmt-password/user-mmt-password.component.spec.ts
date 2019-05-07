import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMmtPasswordComponent } from './user-mmt-password.component';

describe('UserMmtPasswordComponent', () => {
  let component: UserMmtPasswordComponent;
  let fixture: ComponentFixture<UserMmtPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMmtPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMmtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
