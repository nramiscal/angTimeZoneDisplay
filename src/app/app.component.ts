import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  time   = null;
  timeZoneSelected = null;

  clear() {
    this.time = null;
    this.timeZoneSelected = null;
  }

  changeTimeZone(timezone) {
    this.clear();
    this.time = new Date();
    // do not use Date.now() -> needs to be the object
    // so we have access to setHours and getHours methods

    switch(timezone) {
    case 'EST':
        break;
    case 'CST':
        this.time.setHours(this.time.getHours() - 1);
        break;
    case 'MST':
        this.time.setHours(this.time.getHours() - 2);
        break;
    case 'PST':
        this.time.setHours(this.time.getHours() - 3);
        break;
    }
    this.timeZoneSelected = timezone;
  }
}
