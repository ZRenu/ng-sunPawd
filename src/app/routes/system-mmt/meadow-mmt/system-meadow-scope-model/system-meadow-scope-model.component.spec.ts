import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMeadowScopeModelComponent } from './system-meadow-scope-model.component';

describe('SystemMeadowScopeModelComponent', () => {
  let component: SystemMeadowScopeModelComponent;
  let fixture: ComponentFixture<SystemMeadowScopeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMeadowScopeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMeadowScopeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
