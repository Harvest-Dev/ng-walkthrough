import { TestBed, inject } from '@angular/core/testing';

import { AngularWalkthroughService } from './angular-walkthrough.service';

describe('AngularWalkthroughService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularWalkthroughService]
    });
  });

  it('should be created', inject([AngularWalkthroughService], (service: AngularWalkthroughService) => {
    expect(service).toBeTruthy();
  }));
});
