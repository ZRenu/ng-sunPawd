import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockCategoryComponent } from './livestock-category.component';

describe('LivestockCategoryComponent', () => {
  let component: LivestockCategoryComponent;
  let fixture: ComponentFixture<LivestockCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
