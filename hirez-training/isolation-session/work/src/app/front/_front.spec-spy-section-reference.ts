import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { FrontService } from './front.service';
import { TestBed } from '@angular/core/testing';
import { FrontComponent } from './front.component';

// uncomment and remove x to test.

// xdescribe('FrontComponent', () => {
//   let componentUnderTest: FrontComponent, actualValue: any;
//   // let frontServiceStub;
//   let frontServiceSpy: Spy<FrontService>

//   Given(() => {

//     // this manual method is exhausting we use jasmine for spies
//     // let frontServiceStubOriginal = {
//     //   getFeaturedLlamasCalled: false,
//     //   getFeaturedLlamas() {
//     //     this.getFeaturedLlamasCalled = true;
//     //     return [{ name: 'Pipe', imageFileName: 'pots.jpg' }]
//     //   }
//     // }

//     // manual way of creating spies
//     // let frontServiceSpyOriginal = {
//     //   getFeaturedLlamas: jasmine.createSpy('getFeaturedLlamas').and.returnValue([{ name: 'Pipe', imageFileName: 'pots.jpg' }])
//     // }

//     TestBed.configureTestingModule({
//       providers: [FrontComponent,
//         {
//           // useValue here creates a CLONE of the stub and create weird behaviors.
//           // provide: FrontService, useValue: frontServiceStubOriginal

//           // using spies BETTER!
//           provide: FrontService, useValue: createSpyFromClass(FrontService)
//         }
//       ],

//     });

//     componentUnderTest = TestBed.get(FrontComponent);
//     // that is why down you re-inject it so it gets the clone
//     // frontServiceStub = TestBed.get(FrontService);

//     // this is done to ensure you get the EXACT instance of the spy
//     frontServiceSpy = TestBed.get(FrontService);
//   });

//   describe('INIT', () => {

//     // make sure configure spies in the right Given use case.
//     Given(() => {
//       frontServiceSpy.getFeaturedLlamas.and.returnValue([{ name: 'Pipe', imageFileName: 'pots.jpg' }])
//     })

//     When(() => {
//       componentUnderTest.ngOnInit()
//     })

//     Then(() => {
//       expect(componentUnderTest.llamas.length).toBeGreaterThan(0);
//       expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalled()

//       //  STUB/manual spy. Caution: This could not work as expected!
//       // This manual way is complicated
//       // expect(frontServiceStub.getFeaturedLlamasCalled).toBeTruthy();
//   });

//   });

//   describe('METHOD: isListVisible', () => {
//     When(() => {
//       actualValue = componentUnderTest.isListVisible();
//     });

//     describe('GIVEN there are llamas THEN return true', () => {
//       Given(() => {
//         componentUnderTest.llamas = [{ name: 'Billy', imageFileName: 'fake.jpg' }];
//       });
//       Then(() => {
//         expect(actualValue).toEqual(true);
//       });
//     });

//     describe('GIVEN no llamas return false', () => {
//       Given(() => {
//         componentUnderTest.llamas = [];
//       });
//       Then(() => {
//         expect(actualValue).toEqual(false);
//       });
//     });
//   });
// });
