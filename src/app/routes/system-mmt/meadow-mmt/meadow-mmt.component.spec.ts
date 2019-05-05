import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadowMmtComponent } from './meadow-mmt.component';

describe('MeadowMmtComponent', () => {
  let component: MeadowMmtComponent;
  let fixture: ComponentFixture<MeadowMmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeadowMmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadowMmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
