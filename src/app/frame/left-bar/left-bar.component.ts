import {Component, Input} from '@angular/core';


@Component({
    selector: 'my-left-bar',
    templateUrl: 'left-bar.component.html',
    styleUrls: ['left-bar.component.css']
})
export class LeftBarComponent {

    @Input('smallMode')
    smallMode: boolean;

}
