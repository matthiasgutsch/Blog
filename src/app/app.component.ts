import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMenuOpened = false;

  constructor() {}

  openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened
  }

  routerChange(): void {
    if(this.isMenuOpened) {
      this.isMenuOpened = false;
    }
  }
}
