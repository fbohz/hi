import { Component } from '@angular/core';

@Component({
  selector: 'ld-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  getWelcomingMessage(userName: string): string {
    return `Hello ${userName}`;
  }
}
