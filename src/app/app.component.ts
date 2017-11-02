import { Component } from '@angular/core';
import { Game } from './class/game';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    public titre: string = 'Mon App';
    public username: string = 'Pierre';
    public mot_secret: string = 'Super framework Angular !';

    public autorisation: boolean = false;
    public button: string = 'Voir';

    constructor() {

        setTimeout(() => {

            this.titre = 'Mon App qui change de nom';

        }, 3000);

    }

    toggleAuthorisation() {

        this.autorisation = !this.autorisation;

        if ( !this.autorisation  ) {
            this.button = 'Voir';
        }
        else {
            this.button = 'Cacher';
        }
    }

}
