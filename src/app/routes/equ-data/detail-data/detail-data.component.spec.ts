import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDataComponent } from './detail-data.component';

describe('DetailDataComponent', () => {
  let component: DetailDataComponent;
  let fixture: ComponentFixture<DetailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
