import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let audio = new Audio();
    audio.src = '../assets/sounds/ioc_inreg/Eu sunt Liza.mp3'
    let Hilda = new Audio('../assets/sounds/ioc_inreg/Hilda_sora.mp3')
    let Bob = new Audio('../assets/sounds/ioc_inreg/Bob_fratele.mp3')
    let Diana = new Audio('../assets/sounds/ioc_inreg/Diana_verisoara.mp3')
    let Amanda = new Audio('../assets/sounds/ioc_inreg/Amanda_mama.mp3')
    let Rico = new Audio('../assets/sounds/ioc_inreg/Rico_tata.mp3')
    let Allan = new Audio('../assets/sounds/ioc_inreg/Allan_unchiu.mp3')
    let Sarah = new Audio('../assets/sounds/ioc_inreg/Sara_matusa.mp3')
    let Matilda = new Audio('../assets/sounds/ioc_inreg/Mati_bunica.mp3')
    let Tom = new Audio('../assets/sounds/ioc_inreg/Tom_bunicu.mp3')
    //   audio.onended = () => {
    //     audio.onended = null;
    //     audio.src = `../assets/sounds/ioc_inreg/Hilda_sora.mp3`
    //     audio.load();
    //     audio.play();
    //     audio.src = `../assets/sounds/ioc_inreg/Bob_fratele.mp3`
    //   audio.load();
    //   audio.play();
    // }

    audio.load();
    audio.play();
    Hilda.load();
    Bob.load();
    Diana.load();
    Amanda.load();
    Rico.load();
    Allan.load();
    Sarah.load();
    Matilda.load();
    Tom.load();
    setTimeout(() => {
      Hilda.play();
    }, 4500);
    setTimeout(() => {
      Bob.play();
    }, 9500);
    setTimeout(() => {
      Diana.play();
    }, 14500);
    setTimeout(() => {
      Amanda.play();
    }, 18500);
    setTimeout(() => {
      Rico.play();
    }, 21500);
    setTimeout(() => {
      Allan.play();
    }, 26000);
    setTimeout(() => {
      Sarah.play();
    }, 31500);
    setTimeout(() => {
      Matilda.play();
    }, 37500);
    setTimeout(() => {
      Tom.play();
    }, 42500);

  }

  onVideoEnded() {
    this.router.navigate(['/lvl-1']);
  }
}
