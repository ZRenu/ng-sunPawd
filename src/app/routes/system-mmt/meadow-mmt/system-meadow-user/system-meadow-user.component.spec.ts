import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMeadowUserComponent } from './system-meadow-user.component';

describe('SystemMeadowUserComponent', () => {
  let component: SystemMeadowUserComponent;
  let fixture: ComponentFixture<SystemMeadowUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMeadowUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMeadowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
