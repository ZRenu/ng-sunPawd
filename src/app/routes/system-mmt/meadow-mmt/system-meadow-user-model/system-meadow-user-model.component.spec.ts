import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMeadowUserModelComponent } from './system-meadow-user-model.component';

describe('SystemMeadowUserModelComponent', () => {
  let component: SystemMeadowUserModelComponent;
  let fixture: ComponentFixture<SystemMeadowUserModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMeadowUserModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMeadowUserModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
