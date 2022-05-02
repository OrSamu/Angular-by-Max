import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  usernameEmpty: boolean = true;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetUsername(){
    this.username = '';
    this.usernameEmpty = true;
  }

}
