import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray: number[] = [];
  evenArray: number[] = [];

  onReceivedNumber(numberReceived: number){
    console.log(`number received is: ${numberReceived}`)
    if (numberReceived % 2 === 0){
      this.evenArray.push(numberReceived);
      return;
    }
    this.oddArray.push(numberReceived);
  }
}
