import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketComponent } from './component/web-socket.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WebSocketComponent],
    exports: [WebSocketComponent]
})

export class WebSocketModule { }
