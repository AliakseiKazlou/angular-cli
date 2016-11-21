import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketService} from './websocket.service';
import {Match} from '../model/match';

const CHAT_URL = 'ws://localhost:28081/betting/webSocketFeed/EN';


@Injectable()
export class MatchService {

    private matchesMap: Map<string, Match> = new Map<string, Match>();

    public matches: Subject<Match[]>;

    constructor(wsService: WebSocketService) {

        this.matches = <Subject<Match[]>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Match[] => {
                let matches: Match[] = [];
                let data = JSON.parse(response.data);
                for (var matchJson of data) {
                    if (matchJson.allways == null) {
                        let match = new Match().deserialize(matchJson);
                        this.matchesMap.set(match.matchId, match);
                        this.matchesMap.forEach((value, key) => {
                            matches.push(value);
                        });
                        matches.sort((a, b): number => {
                            if (a.odds[0] < b.odds[0]) {
                                return -1;
                            }
                            if (a.odds[0] > b.odds[0]) {
                                return 1;
                            }
                            return 0;
                        });
                    }
                }
                return matches;
            });
    }
}