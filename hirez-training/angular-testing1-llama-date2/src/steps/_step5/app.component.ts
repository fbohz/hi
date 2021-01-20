import { Component } from '@angular/core';

export class ServiceOne {
  do1(){}
}

  export class ServiceTwo {
  do12(){}
}

@Component({
  selector: 'ld-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(s1: ServiceOne, s2: ServiceTwo){}

  greeting: string = "Hello"

  getWelcomingMessage(userName: string): string {
    return `${this.greeting} ${userName}`;
  }
}
