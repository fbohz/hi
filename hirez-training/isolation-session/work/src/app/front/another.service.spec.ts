import { Llama } from './llama.model';
import { AnotherService } from './another.service';
import { TestBed } from '@angular/core/testing';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { HttpClient } from '@angular/common/http';

describe('AnotherService', () => {
  let serviceUnderTest: AnotherService;
  let httpSpy: Spy<HttpClient>;
  let actualResult: any;
  let fakeLlamas: Llama[];

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        AnotherService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    serviceUnderTest = TestBed.get(AnotherService);
    httpSpy = TestBed.get(HttpClient);

    actualResult = undefined;
    fakeLlamas = undefined;

  });

  describe('METHOD: getLlamasFromServer', () => {

    When(() => {
      serviceUnderTest.getLlamasFromServer().subscribe(value => {
        actualResult = value;
      })
    });

    describe('GIVEN successful request THEN return llamas', () => {
      Given(() => {
        // successful request with jasmine auto spies
        fakeLlamas = [{ name: 'Moco', imageFileName: '1.jpg' }];
        httpSpy.get.and.nextOneTimeWith(fakeLlamas)

      });
      Then('',() => {
        expect(actualResult).toEqual(fakeLlamas);
      });
    });

  });
});
