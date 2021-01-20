import { TestBed } from "@angular/core/testing";
import { FrontComponent } from "./front.component";

describe('FrontComponent', () => {

  let componentUnderTest: FrontComponent,
    actualValue: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        FrontComponent
      ]
    });

    componentUnderTest = TestBed.get(FrontComponent);

  });

  describe('METHOD: isListVisible', () => {

    When(() => {
      actualValue = componentUnderTest.isListVisible();
    });

    describe('there are llamas', () => {

      Given(() => {
        componentUnderTest.llamas = [
          { name: 'Billy' }
        ];
      });
      Then(() => {
        expect(actualValue).toEqual(true);
      });
    });

    describe('no llamas', () => { 

      Given(() => {
        componentUnderTest.llamas = [ ];
      });
      Then(() => {
        expect(actualValue).toEqual(false);
      });
    });

  });

});