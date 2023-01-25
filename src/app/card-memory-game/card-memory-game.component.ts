import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from './card';

@Component({
  selector: 'app-card-memory-game',
  templateUrl: './card-memory-game.component.html',
  styleUrls: ['./card-memory-game.component.css'],
})
export class CardMemoryGameComponent implements OnInit {
  people: Array<Array<Card>> = [];
  private family: Array<string> = ['mama', 'tata', 'bunica', 'matusa'];
  private pictures: Array<string> = [
    './assets/img/mama.png',
    './assets/img/tata.png',
    './assets/img/buni.png',
    './assets/img/matusa.png',
  ];
  private howmany: Array<number> = [0, 0, 0, 0];
  private cardBack: string = './assets/img/soare.jpg';
  toBeFound: string = '';
  private remaining: number = 2;
  audio = new Audio();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    route.params.subscribe(() => {
      this.people = [];
      this.remaining = 2;
      var firstRow: Array<Card> = [];
      for (let i = 0; i < 4; i++) {
        let chosen;
        while (true) {
          chosen = this.getRandomInt(0, 3);
          if (this.howmany[chosen] == 2) continue;
          break;
        }
        this.howmany[chosen]++;
        var card = {
          img: this.pictures[chosen],
          img_face_down: this.cardBack,
          img_face_up: this.pictures[chosen],
          name: this.family[chosen],
        };
        firstRow.push(card);
      }
      this.people.push(firstRow);

      var secondRow: Array<Card> = [];
      for (let i = 0; i < 4; i++) {
        let chosen;
        while (true) {
          chosen = this.getRandomInt(0, 3);
          if (this.howmany[chosen] == 2) continue;
          break;
        }
        this.howmany[chosen]++;
        var card = {
          img: this.pictures[chosen],
          img_face_down: this.cardBack,
          img_face_up: this.pictures[chosen],
          name: this.family[chosen],
        };
        secondRow.push(card);
      }
      this.people.push(secondRow);

      this.toBeFound = this.family[this.getRandomInt(0, 3)];

      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 4; j++) {
            this.people[i][j].img = this.people[i][j].img_face_down;
          }
        }
      }, 2500);
    });
  }

  ngOnInit(): void {
    this.audio.src = '../assets/sounds/ioc_inreg/joc_carti_memorie.mp3';
    this.audio.onended = () => {
      this.audio.onended = null;
      this.audio.src = `../assets/sounds/ioc_inreg/unde_e_${this.toBeFound}_card.mp3`;
      this.audio.load();
      this.audio.play();
    };
    this.audio.load();
    this.audio.play();
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  show(row: number, column: number) {
    let audio = new Audio();
    this.people[row][column].img = this.people[row][column].img_face_up;

    if (this.people[row][column].name != this.toBeFound) {
      setTimeout(() => {
        this.people[row][column].img = this.people[row][column].img_face_down;
      }, 2500);
    } else {
      this.remaining--;
      if (this.remaining == 0) {
        audio.src = '../assets/sounds/ioc_inreg/bravo_ai_reusit.mp3';
        audio.load();
        audio.play();
        setTimeout(() => {
          let levelNumber = Number(
            this.route.snapshot.paramMap.get('levelNumber')
          );
          if (levelNumber < 5) {
            levelNumber++;
            this.router.navigate([`/card/${levelNumber}`]);
          } else {
            this.router.navigate(['/maze']);
          }
        }, 3500);
      }
    }
  }
}
