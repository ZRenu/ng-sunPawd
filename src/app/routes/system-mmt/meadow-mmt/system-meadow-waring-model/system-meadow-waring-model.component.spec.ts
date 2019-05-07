import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMeadowWaringModelComponent } from './system-meadow-waring-model.component';

describe('SystemMeadowWaringModelComponent', () => {
  let component: SystemMeadowWaringModelComponent;
  let fixture: ComponentFixture<SystemMeadowWaringModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMeadowWaringModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMeadowWaringModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
