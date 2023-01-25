import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl3',
  templateUrl: './lvl3.component.html',
  styleUrls: ['./lvl3.component.css']
})
export class Lvl3Component implements OnInit {

   number: number = -1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(()=>{this.router.navigate([''])},20000)
    let audio = new Audio();
    audio.src = '../assets/sounds/ioc_inreg/al_trilea_niv.mp3'
    audio.onended = () => {
      audio.onended = null;
      audio.src = '../assets/sounds/ioc_inreg/cine_e_bunica.mp3'
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
          this.router.navigate(['/lvl-4'])
        }, 3500)
        break;
      case 0:
        audio.src = '../assets/sounds/ioc_inreg/Mai_incearca.mp3'

    }
    audio.load();
    audio.play();
  }

}
