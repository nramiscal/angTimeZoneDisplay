import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  time   = null;
  Mcolor = null;
  Ccolor = null;
  Ecolor = null;
  Pcolor = null;

  clear() {
    this.time = null;
    this.Mcolor = null;
    this.Pcolor = null;
    this.Ecolor = null;
    this.Ccolor = null;
  }

  changeTimeZone(timezone) {
    this.clear();
    this.time = new Date();
    // do not use Date.now() -> needs to be the object
    // so we have access to setHours and getHours methods

    switch(timezone) {
    case 'EST':
        this.Ecolor = 'yellow';
        break;
    case 'CST':
        this.time.setHours(this.time.getHours() - 1);
        this.Ccolor = 'yellow';
        break;
    case 'MST':
        this.time.setHours(this.time.getHours() - 2);
        this.Mcolor = 'yellow';
        break;
    case 'PST':
        this.time.setHours(this.time.getHours() - 3);
        this.Pcolor = 'yellow';
        break;
    }
  }
}
