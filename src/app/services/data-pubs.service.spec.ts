import { TestBed } from '@angular/core/testing';

import { DataPubsService } from './data-pubs.service';

describe('DataPubsService', () => {
  let service: DataPubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
