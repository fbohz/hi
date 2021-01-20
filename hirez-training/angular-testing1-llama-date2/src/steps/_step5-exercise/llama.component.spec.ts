import { LlamaComponent } from './llama.component';

describe('METHOD: speak', () => {

  let actualValue, expectedValue;
  let fakeWord: string;
  let componentUnderTest: LlamaComponent;

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