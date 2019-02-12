import { TestBed, async, inject } from '@angular/core/testing';

import { IsregisterformGuard } from './isregisterform.guard';

describe('IsregisterformGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsregisterformGuard]
    });
  });

  it('should ...', inject([IsregisterformGuard], (guard: IsregisterformGuard) => {
    expect(guard).toBeTruthy();
  }));
});
