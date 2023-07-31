import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  isDark: boolean = false;
  color: ThemePalette = 'primary';

  constructor(iconRegistry: MatIconRegistry) {}

  onTheme() {
    if (this.isDark) {
      this.isDark = false
    } else {
      this.isDark = true
    }
  }
}
