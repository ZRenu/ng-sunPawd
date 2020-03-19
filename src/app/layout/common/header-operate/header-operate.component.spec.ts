import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOperateComponent } from './header-operate.component';

describe('HeaderOperateComponent', () => {
  let component: HeaderOperateComponent;
  let fixture: ComponentFixture<HeaderOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
