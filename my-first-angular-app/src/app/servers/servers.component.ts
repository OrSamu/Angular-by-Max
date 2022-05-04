import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServerButton: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'unempty-name';
  serverCreated: boolean = false;
  serversList = ['Server 1', 'Server 2 - Backup']

  constructor() { 
    setTimeout(() => {
      this.allowAddServerButton = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server '${this.serverName}' was created `;
    this.serverCreated = true;
    this.serversList.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
