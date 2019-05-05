import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMmtComponent } from './user-mmt.component';

describe('UserMmtComponent', () => {
  let component: UserMmtComponent;
  let fixture: ComponentFixture<UserMmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
