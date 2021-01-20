import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location: string = 'Madrid';

  price: number = 290;

  hairstyle: string = 'Cousin It';

  picture: string = 'assets/images/madrid.jpg';

  constructor() { }

}
