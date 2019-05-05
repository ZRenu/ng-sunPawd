import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSstComponent } from './detail-sst.component';

describe('DetailSstComponent', () => {
  let component: DetailSstComponent;
  let fixture: ComponentFixture<DetailSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
