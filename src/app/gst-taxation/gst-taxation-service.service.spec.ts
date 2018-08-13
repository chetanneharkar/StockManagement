import { TestBed, inject } from '@angular/core/testing';

import { GstTaxationServiceService } from './gst-taxation-service.service';

describe('GstTaxationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GstTaxationServiceService]
    });
  });

  it('should be created', inject([GstTaxationServiceService], (service: GstTaxationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
