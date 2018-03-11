import { TestBed, inject } from '@angular/core/testing';

import { FmServiceService } from './fm-service.service';

describe('FmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FmServiceService]
    });
  });

  it('should be created', inject([FmServiceService], (service: FmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
