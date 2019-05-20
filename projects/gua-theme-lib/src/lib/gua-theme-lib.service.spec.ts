import { TestBed } from '@angular/core/testing';

import { GuaThemeService } from './gua-theme-lib.service';

describe('GuaThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuaThemeService = TestBed.get(GuaThemeService);
    expect(service).toBeTruthy();
  });
});
