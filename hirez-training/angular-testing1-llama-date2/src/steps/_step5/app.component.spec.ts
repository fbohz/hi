import { TestBed } from '@angular/core/testing';
import {AppComponent, ServiceTwo, ServiceOne} from './app.component'

describe('METHOD: getWelcomingMessage', () => {

  let component: AppComponent;

  let actualValue, expectedValue;
  let fakeUserName: string;

  Given(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ServiceOne, ServiceTwo, AppComponent],
      declarations: []
    })
    component = TestBed.get(AppComponent)
  })

  When(() => {
    actualValue = component.getWelcomingMessage(fakeUserName);
  });

  describe('user name is Bonnie', () => {

    Given(() => {
      component.greeting = "Hola"
      fakeUserName = 'Bonnie';
    });

    Then(() => {
      expectedValue = 'Hola Bonnie';
      expect(actualValue).toEqual(expectedValue);
    });
  });

  describe('user name is Alyssa', () => {

    Given(() => {
      fakeUserName = 'Alyssa';
    });

    Then(() => {
      expectedValue = 'Hello Alyssa';
      expect(actualValue).toEqual(expectedValue);
    });
  });
});
