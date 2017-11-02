import { Component } from '@angular/core';
import { Game } from './class/game';

@Component({
    selector: 'app-games',
    templateUrl: 'games.component.html',
    styleUrls: [ 'games.component.css' ]
})
export class GamesComponent {

    public selected_game: Game;
    public mygames: Game[] = [
        new Game( 'Monopoly', 'Hasbro' ),
        new Game( 'Cluedo', 'Hasbro'),
        new Game( 'Poker', 'Cartemania' )
    ];

    constructor() {

        setTimeout( () => {
            this.mygames.push( new Game('test', 'testeditor') );
        }, 3000 );

    }

    selectGame( game: Game ) {
        this.selected_game = game;
    }

}
