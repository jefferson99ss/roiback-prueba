import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'prueba-roiback';
  openCloseMenuAnimation: boolean = false

  openCloseMenu(){    
    this.openCloseMenuAnimation = !this.openCloseMenuAnimation
  }
}
