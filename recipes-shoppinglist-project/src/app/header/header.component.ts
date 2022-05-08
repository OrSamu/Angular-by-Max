import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    collapsed: boolean = true;
    @Output() navChanged = new EventEmitter<string>();

    onNavClick(componentToShow: string){
        console.log(componentToShow);
        this.navChanged.emit(componentToShow);
    }
}