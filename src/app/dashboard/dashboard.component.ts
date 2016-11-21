import { Component, OnInit } from '@angular/core';
import {FrameControlService} from "../frame-control.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FrameControlService]
})
export class DashboardComponent implements OnInit {

  smallMode: boolean = false;
  showFrame: boolean = true;

  constructor(private frameControl: FrameControlService) {
    frameControl.frameChanged$.subscribe(
      frameEnabled => {
        this.showFrame = frameEnabled;
      });
  }

  onModeChange(smallMode: boolean) {
    this.smallMode = smallMode;
  }

  ngOnInit() {
  }

}
