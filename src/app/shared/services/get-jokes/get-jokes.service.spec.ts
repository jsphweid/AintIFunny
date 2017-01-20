/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetJokesService } from './get-jokes.service';

describe('GetJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJokesService]
    });
  });

  it('should ...', inject([GetJokesService], (service: GetJokesService) => {
    expect(service).toBeTruthy();
  }));
});
