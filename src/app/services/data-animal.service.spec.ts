import { TestBed } from '@angular/core/testing';

import { DataAnimalService } from './data-animal.service';

describe('DataAnimalService', () => {
  let service: DataAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
