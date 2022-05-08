import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-shoppinglist-project';
  showRecipesComponent: boolean = true;

  onNavChange(event){
    if (event === "Recipes"){
      this.showRecipesComponent = true;
      return;
    }
    this.showRecipesComponent = false;
  }
}
