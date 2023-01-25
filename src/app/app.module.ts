import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayComponent} from './play/play.component';
import {HomeComponent} from './home/home.component';
import {Lvl1Component} from './lvl1/lvl1.component';
import {Lvl2Component} from './lvl2/lvl2.component';
import {Lvl3Component} from './lvl3/lvl3.component';
import {Lvl4Component} from './lvl4/lvl4.component';
import {Lvl5Component} from './lvl5/lvl5.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzleLvl2Component } from './puzzle-lvl2/puzzle-lvl2.component';
import { CardMemoryGameComponent } from './card-memory-game/card-memory-game.component';
import { MazeComponent } from './maze/maze.component';
import { FormsModule } from '@angular/forms';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    HomeComponent,
    Lvl1Component,
    Lvl2Component,
    Lvl3Component,
    Lvl4Component,
    Lvl5Component,
    PuzzleComponent,
    PuzzleLvl2Component,
    CardMemoryGameComponent,
    MazeComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
