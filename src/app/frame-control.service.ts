import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class FrameControlService {

  constructor() { }

  // Observable string sources
  private frameChangedSource = new Subject<boolean>();
  // Observable string streams
  frameChanged$ = this.frameChangedSource.asObservable();
  // Service message commands
  changeFrameEnabled(frameEnabled: boolean) {
    this.frameChangedSource.next(frameEnabled);
  }

}
