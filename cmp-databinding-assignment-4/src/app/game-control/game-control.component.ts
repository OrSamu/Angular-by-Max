import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameNumber: number = 0;
  gameInterval: any;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.gameInterval = setInterval(()=>{
      this.gameStarted.emit(this.gameNumber);
      this.gameNumber++;
    },1000);
  }

  onStopGame(){
    clearInterval(this.gameInterval);
  }

}
