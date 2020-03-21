import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisComponent } from './user-dis.component';

describe('UserDisComponent', () => {
  let component: UserDisComponent;
  let fixture: ComponentFixture<UserDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
