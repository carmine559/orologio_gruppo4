import { TestBed } from '@angular/core/testing';

import { OrologioService } from './orologio.service';

describe('OrologioService', () => {
  let service: OrologioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrologioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
