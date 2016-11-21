import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    @Input() smallMode: boolean;
    @Output() onModeChange = new EventEmitter<boolean>();

    hideLeftBar(): void {
        this.smallMode = !this.smallMode;
        this.onModeChange.emit(this.smallMode);
    }

}
