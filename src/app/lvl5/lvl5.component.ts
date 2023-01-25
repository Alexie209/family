import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl5',
  templateUrl: './lvl5.component.html',
  styleUrls: ['./lvl5.component.css']
})
export class Lvl5Component implements OnInit {

  number: number = -1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(()=>{this.router.navigate([''])},20000)
    let audio = new Audio();
    audio.src = '../assets/sounds/ioc_inreg/nivelul_5.mp3'
    audio.onended = () => {
      audio.onended = null;
      audio.src = '../assets/sounds/ioc_inreg/cine_este_tatal.mp3'
      audio.load();
      audio.play();
  }
    audio.load();
    audio.play();
  }

  onAnswer(number: number) {
    this.number = number;
    let audio = new Audio();
    switch (this.number) {
      case 1:
        audio.src = '../assets/sounds/ioc_inreg/Bravo.mp3'
        setTimeout(() => {
          this.router.navigate(['/puzzle'])
        }, 3500)
        break;
      case 0:
          audio.src = '../assets/sounds/ioc_inreg/Mai_incearca.mp3'

    }
    audio.load();
    audio.play();
  }
}
