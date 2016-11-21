import { Component, OnInit } from '@angular/core';
import {FrameControlService} from "../frame-control.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor(private frameControlService: FrameControlService) {
  //   this.frameControlService.changeFrameEnabled(false);
  // }

  ngOnInit() {
  }

}
