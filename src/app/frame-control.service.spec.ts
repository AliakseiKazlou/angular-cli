/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FrameControlService } from './frame-control.service';

describe('Service: FrameControl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameControlService]
    });
  });

  it('should ...', inject([FrameControlService], (service: FrameControlService) => {
    expect(service).toBeTruthy();
  }));
});
