import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMeadowModelComponent } from './system-meadow-model.component';

describe('SystemMeadowModelComponent', () => {
  let component: SystemMeadowModelComponent;
  let fixture: ComponentFixture<SystemMeadowModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMeadowModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMeadowModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
