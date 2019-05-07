import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMmtAuthorComponent } from './user-mmt-author.component';

describe('UserMmtAuthorComponent', () => {
  let component: UserMmtAuthorComponent;
  let fixture: ComponentFixture<UserMmtAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMmtAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMmtAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
