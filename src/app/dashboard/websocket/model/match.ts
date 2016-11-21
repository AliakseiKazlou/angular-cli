export class Match {
    matchId: string;
    away: string;
    home: string;
    odds: string[] = [];

    deserialize(input) {
        this.matchId = input.matchid;
        this.away = input.away;
        this.home = input.home;
        for (let odd of input.Odds) {
            this.odds.push(odd.value);
        }
        return this;
    }
}