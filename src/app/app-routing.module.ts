import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMemoryGameComponent } from './card-memory-game/card-memory-game.component';
import { FinalComponent } from './final/final.component';
import { HomeComponent } from './home/home.component';
import { Lvl1Component } from './lvl1/lvl1.component';
import { Lvl2Component } from './lvl2/lvl2.component';
import { Lvl3Component } from './lvl3/lvl3.component';
import { Lvl4Component } from './lvl4/lvl4.component';
import { Lvl5Component } from './lvl5/lvl5.component';
import { MazeComponent } from './maze/maze.component';
import { PlayComponent } from './play/play.component';
import { PuzzleLvl2Component } from './puzzle-lvl2/puzzle-lvl2.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  { path: 'play', component: PlayComponent },
  { path: '', component: HomeComponent },
  { path: 'lvl-1', component: Lvl1Component },
  { path: 'lvl-2', component: Lvl2Component },
  { path: 'lvl-3', component: Lvl3Component },
  { path: 'lvl-4', component: Lvl4Component },
  { path: 'lvl-5', component: Lvl5Component },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'puzzle-lvl2', component: PuzzleLvl2Component },
  { path: 'card/:levelNumber', component: CardMemoryGameComponent },
  { path: 'maze', component: MazeComponent },
  {path: 'final', component:FinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
