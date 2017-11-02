import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent // On doit ajouter notre component dans les déclarations
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
