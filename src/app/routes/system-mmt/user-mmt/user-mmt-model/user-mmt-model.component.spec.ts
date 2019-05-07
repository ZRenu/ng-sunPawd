import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMmtModelComponent } from './user-mmt-model.component';

describe('UserMmtModelComponent', () => {
  let component: UserMmtModelComponent;
  let fixture: ComponentFixture<UserMmtModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMmtModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMmtModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
