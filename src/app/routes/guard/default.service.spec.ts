import { TestBed, inject } from '@angular/core/testing';

import { DefaultService } from './default.service';

describe('DefaultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultService]
    });
  });

  it('should be created', inject([DefaultService], (service: DefaultService) => {
    expect(service).toBeTruthy();
  }));
});
