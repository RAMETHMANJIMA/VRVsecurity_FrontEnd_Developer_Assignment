import { TestBed } from '@angular/core/testing';

import { EmpInterceptor } from './emp.interceptor';

describe('EmpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EmpInterceptor = TestBed.inject(EmpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
