import { TestBed, async, inject } from '@angular/core/testing';

import { IsSaveRegisterFormGuard } from './is-save-register-form.guard';

describe('IsSaveRegisterFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsSaveRegisterFormGuard]
    });
  });

  it('should ...', inject([IsSaveRegisterFormGuard], (guard: IsSaveRegisterFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
