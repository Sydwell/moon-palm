import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ice3-moon';
  menu2show = 'home';

  menuClick(theButton: string) {
    this.menu2show = theButton;
  }
}
