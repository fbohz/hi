import { RouterAdapterService } from './../_services/router-adapter.service';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { FrontService } from './front.service';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FrontComponent } from './front.component';

describe('FrontComponent', () => {
  let componentUnderTest: FrontComponent, actualValue: any;
  let frontServiceSpy: Spy<FrontService>
  let routerSpy: Spy<RouterAdapterService>

  Given(() => {

    TestBed.configureTestingModule({
      providers: [FrontComponent,
        { provide: FrontService, useValue: createSpyFromClass(FrontService)},
        { provide: RouterAdapterService, useValue: createSpyFromClass(RouterAdapterService)}
      ],

    });

    componentUnderTest = TestBed.get(FrontComponent);
    frontServiceSpy = TestBed.get(FrontService);
    routerSpy = TestBed.get(RouterAdapterService);
  });

  describe('INIT', () => {

    // with no Ajax calls
    When(fakeAsync(() => {
      componentUnderTest.ngOnInit()
      tick(4000); // simulates 4 seconds
    }))

    // with Ajax calls and done but this can cause performance issues!
    // When(done => {
    //   componentUnderTest.ngOnInit().then(() => {
    //     done()
    //   })
    // })

    describe('GIVEN there are llamas THEN store the result', () => {
      // Given(() => {
      //   frontServiceSpy.getFeaturedLlamas.and.returnValue(
      //     Promise.resolve([{ name: 'Pipe', imageFileName: 'pots.jpg' }]));
      // })

      // using Jasmine resolveWith (only for Promises) leans up code
      Given(() => {
        // mustBeCalledWith from auto-spies enforces arguments
        frontServiceSpy.getFeaturedLlamas.mustBeCalledWith({ newest: true }).
          resolveWith([{ name: 'Pipe', imageFileName: 'pots.jpg' }]);
      })
      Then(() => {
        expect(componentUnderTest.llamas.length).toBeGreaterThan(0);
        // expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalledWith({newest: true})
      });
    })

    describe('GIVEN problem fetching show ERROR ', () => {

      Given(() => {
        frontServiceSpy.getFeaturedLlamas.and.rejectWith()
      });

      Then(() => {
        expect(componentUnderTest.showErrorMessage).toBeTruthy()
      });


    })



  });

  describe('METHOD: isListVisible', () => {
    When(() => {
      actualValue = componentUnderTest.isListVisible();
    });

    describe('GIVEN there are llamas THEN return true', () => {
      Given(() => {
        componentUnderTest.llamas = [{ name: 'Billy', imageFileName: 'fake.jpg' }];
      });
      Then(() => {
        expect(actualValue).toEqual(true);
      });
    });

    describe('GIVEN no llamas return false', () => {
      Given(() => {
        componentUnderTest.llamas = [];
      });
      Then(() => {
        expect(componentUnderTest.showErrorMessage).not.toBeTruthy()
      });
    });
  });

  describe('METHOD: goToLlamPage', () => {
    let fakeLlamaId: string;
    Given(() => {
      fakeLlamaId = 'FAKE_ID'
    });

    When(() => {
       componentUnderTest.goToLlamaPage(fakeLlamaId)
    });

    Then(() => {
      expect(routerSpy.goToUrl).toHaveBeenCalledWith(`/llama/${fakeLlamaId}`);
    });

  });
});
