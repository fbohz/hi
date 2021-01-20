import { LlamaComponent } from "./llama.component";
import { TestBed } from "@angular/core/testing";

describe('METHOD: speak', () => {

  let actualValue, expectedValue;
  let fakeWord: string;
  let componentUnderTest: LlamaComponent;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        LlamaComponent
      ]
    });
    componentUnderTest = TestBed.get(LlamaComponent);
  });

  When(() => {
    actualValue = componentUnderTest.speak(fakeWord);
  });

  describe('user name is Bonnie', () => {
    Given(() => {
      fakeWord = 'Bonnie';
    });

    Then(() => {
      expect(actualValue).toEqual('Llama says: Bonnie'); 
    });
  });

});