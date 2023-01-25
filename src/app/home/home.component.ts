import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    let audio = new Audio();
    // audio.src = '../assets/sounds/music.mp3'
    // audio.load()
    // //TODO de scos ca sa cante
    // audio.play();
  }

  onPlay() {
    this.router.navigate(['/play']);
  }


}
