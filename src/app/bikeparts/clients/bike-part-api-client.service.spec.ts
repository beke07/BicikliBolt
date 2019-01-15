import { TestBed } from '@angular/core/testing';

import { BikePartApiClientService } from './bike-part-api-client.service';

describe('BikePartApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikePartApiClientService = TestBed.get(BikePartApiClientService);
    expect(service).toBeTruthy();
  });
});
