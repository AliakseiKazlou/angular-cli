import {Component, Pipe, PipeTransform} from '@angular/core';
import {WebSocketService} from "../service/websocket.service";
import {MatchService} from "../service/match.service";
import {Match} from "../model/match";


@Component({
    selector: 'my-test-websocket',
    templateUrl: 'web-socket.component.html',
    styleUrls: ['web-socket.component.css'],
    providers: [MatchService, WebSocketService],
})


export class WebSocketComponent {

    public matches: Match[] = [];

    constructor(private matchService: MatchService) {
        matchService.matches.subscribe(msg => {
            this.matches = msg;
        });
    }

}
