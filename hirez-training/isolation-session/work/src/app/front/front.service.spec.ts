import { AnotherService } from './another.service';
import { Llama } from './llama.model';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { FrontService } from './front.service';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
describe('FrontService', () => {
  let service: FrontService
  let fakeLlamas: Llama[];
  let actualResult: any;
  let anotherServiceSpy: Spy<AnotherService>

  Given(() => {
    TestBed.configureTestingModule({
      providers: [FrontService,
        {provide: AnotherService, useValue: createSpyFromClass(AnotherService)}
      ]
    })
    service = TestBed.get(FrontService)
    anotherServiceSpy = TestBed.get(AnotherService)
    fakeLlamas = undefined
    actualResult = undefined
  });

  describe('METHOD: getFeaturedLlamas', () => {
    Given(() => {
      fakeLlamas = [{ name: 'FAKE NAME', imageFileName: 'FAKE IMG' }]
      // anotherServiceSpy.getLlamasFromServer.and.nextWith(fakeLlamas)
      // complete observable in order to use toPromise in service
      anotherServiceSpy.getLlamasFromServer.and.nextOneTimeWith(fakeLlamas)
    });

    // you can also use async/await with fakeAsync like this
    When(fakeAsync(async () => {
      actualResult = await service.getFeaturedLlamas()
    }));

    Then(() => {
      expect(actualResult).toEqual(fakeLlamas);
    });

  });


})
