/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginGuardService } from './login-guard.service';

describe('Service: LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardService]
    });
  });

  it('should ...', inject([LoginGuardService], (service: LoginGuardService) => {
    expect(service).toBeTruthy();
  }));
});
