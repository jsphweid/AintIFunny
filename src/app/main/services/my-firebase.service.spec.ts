/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyFirebaseService } from './my-firebase.service';

describe('MyFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFirebaseService]
    });
  });

  it('should ...', inject([MyFirebaseService], (service: MyFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
