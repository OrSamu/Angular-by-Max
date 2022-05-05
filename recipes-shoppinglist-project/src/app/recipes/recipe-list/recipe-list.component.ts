import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburger Recipe', 'This is the first recipe',
     'https://imageproxy.wolt.com/venue/5e6f93e9337c3135d34e1811/5f4f2ec2-682a-11ea-b01a-0a58646e9cf9_gdb8840.jpg'),
     new Recipe('Hamburger Recipe', 'This is the first recipe',
     'https://imageproxy.wolt.com/venue/5e6f93e9337c3135d34e1811/5f4f2ec2-682a-11ea-b01a-0a58646e9cf9_gdb8840.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
