import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiComponent } from './hi.component';

describe('HiComponent', () => {
  let component: HiComponent;
  let fixture: ComponentFixture<HiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
