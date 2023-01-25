import {
  AfterViewInit,
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Cell, Maze } from './models';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css'],
})
export class MazeComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.gameOver == true) {
      this.router.navigate(['/final']);
    }
  }
  row = 9;
  col = 9;
  cellSize = 50; // cell size
  private maze: Maze;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private gameOver = false;
  private myPath: Cell[] = [];
  private currentCell: Cell;

  private keyboardMap: Map<string, string> = new Map([
    ['ArrowLeft', 'Left'],
    ['A', 'Left'],
    ['a', 'Left'],
    ['ArrowRight', 'Right'],
    ['D', 'Right'],
    ['d', 'Right'],
    ['ArrowUp', 'Up'],
    ['W', 'Up'],
    ['w', 'Up'],
    ['ArrowDown', 'Down'],
    ['S', 'Down'],
    ['s', 'Down'],
  ]);

  ngOnInit() {
    let audio = new Audio();
    audio.src = '../assets/sounds/ioc_inreg/labirint.mp3';
    audio.onended = () => {
      audio.onended = null;
      audio.src = `../assets/sounds/ioc_inreg/foloseste_sagetile_pt_labirint.mp3`;
      audio.load();
      audio.play();
    };

    audio.load();
    audio.play();
  }

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('maze');
    this.ctx = this.canvas.getContext('2d')!;
    this.drawMaze();
  }

  drawMaze() {
    if (this.row > 10) {
      this.cellSize = 40;
    } else this.cellSize = 50;
    if (this.row <= 13) {
      this.maze = new Maze(this.row, this.col, this.cellSize, this.ctx);
      this.canvas.width = this.col * this.cellSize;
      this.canvas.height = this.row * this.cellSize;
      this.maze.draw();
    } else {
      this.row = 13;
      this.maze = new Maze(this.row, this.col, this.cellSize, this.ctx);
      this.canvas.width = this.col * this.cellSize;
      this.canvas.height = this.row * this.cellSize;
      this.maze.draw();
    }
    this.initPlay();
  }

  initPlay(lineThickness = 10, color = '#4080ff') {
    this.gameOver = false;
    this.myPath.length = 0;
    this.ctx.lineWidth = lineThickness;
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.cellSize / 2);
    this.ctx.lineTo(this.cellSize / 2, this.cellSize / 2);
    this.ctx.stroke();
    this.currentCell = this.maze.cells[0][0];
    this.myPath.push(this.currentCell);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.gameOver) return;
    var key: string = event.key;
    const direction: string = this.keyboardMap.get(key) as string;
    if (direction) this.move(direction);
  }

  move(direction: string) {
    let audio = new Audio();
    let nextCell: Cell = this.currentCell;
    if (direction === 'Left') {
      if (this.currentCell.col < 1) return;
      nextCell =
        this.maze.cells[this.currentCell.row][this.currentCell.col - 1];
    }
    if (direction === 'Right') {
      if (this.currentCell.col + 1 >= this.col) return;
      nextCell =
        this.maze.cells[this.currentCell.row][this.currentCell.col + 1];
    }
    if (direction === 'Up') {
      if (this.currentCell.row < 1) return;
      nextCell =
        this.maze.cells[this.currentCell.row - 1][this.currentCell.col];
    }
    if (direction === 'Down') {
      if (this.currentCell.row + 1 >= this.row) return;
      nextCell =
        this.maze.cells[this.currentCell.row + 1][this.currentCell.col];
    }

    if (this.currentCell.hasConnectionWith(nextCell)) {
      if (
        this.myPath.length > 1 &&
        this.myPath[this.myPath.length - 2].equals(nextCell)
      ) {
        this.maze.erasePath(this.myPath);
        this.myPath.pop();
      } else {
        this.myPath.push(nextCell);
        if (nextCell.equals(new Cell(this.row - 1, this.col - 1))) {
          this.hooray();
          this.gameOver = true;
          if (this.gameOver == true) {
            audio.src = '../assets/sounds/ioc_inreg/Bravo.mp3';
            audio.load();
            audio.play();
            this.router.navigate(['/final']);
          }

          this.maze.drawSolution('#4080ff');
          return;
        }
      }

      this.maze.drawPath(this.myPath);
      this.currentCell = nextCell;
    }
  }

  solution() {
    this.gameOver = true;
    this.maze.drawSolution('#ff7575', 3);
    if (this.gameOver == true) {
      this.router.navigate(['/final']);
    }
  }

  private hooray() {
    var audio = new Audio('assets/bravo_ai_reusit.mp3');
    audio.play();
  }
}
