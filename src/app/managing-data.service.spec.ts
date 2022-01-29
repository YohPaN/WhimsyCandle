import { TestBed } from '@angular/core/testing';

import { ManagingDataService } from './managing-data.service';

describe('ManagingDataService', () => {
  let service: ManagingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
