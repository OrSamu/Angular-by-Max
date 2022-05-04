import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.whiteText{ color: white; }']
})
export class AppComponent {
  showSecret: boolean = false;
  logClicks: number[] = [];

  onVisibilityChange(){
    this.showSecret = !this.showSecret;
    this.logClicks.push(this.logClicks.length+1);
  }

  getBackgroundColor(logId: number){
    return logId > 4 ? 'blue' : 'transparent';
  }

  shouldAddClass(logId: number){
    return logId > 4;
  }
}
