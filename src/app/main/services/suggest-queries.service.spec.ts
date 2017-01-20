/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicesService } from './suggest-queries.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesService]
    });
  });

  it('should ...', inject([ServicesService], (service: ServicesService) => {
    expect(service).toBeTruthy();
  }));
});