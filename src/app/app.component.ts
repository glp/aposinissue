import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIvy';
  hasThings1 = false;
  hasThings2 = true;

  updateView($event: Event) {
    this.hasThings1 = true;
  }
}
