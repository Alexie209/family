import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
onRepeatMaze() {
this.router.navigate(['/maze'])
}
onGoBack() {
  this.router.navigate([''])
}

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
