import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ice3-moon';
  menu2show = 'home';
  aboutViewed = false;
  parentInfo = '';

  menuClick(theButton: string) {
    this.menu2show = theButton;
    if (theButton === 'about') {
      this.aboutViewed = true;
    }
  }

  eventMethod(eventString) {
    this.parentInfo = eventString;
  }
}
