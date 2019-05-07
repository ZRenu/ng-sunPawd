import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockCategoryModelComponent } from './livestock-category-model.component';

describe('LivestockCategoryModelComponent', () => {
  let component: LivestockCategoryModelComponent;
  let fixture: ComponentFixture<LivestockCategoryModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockCategoryModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockCategoryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
