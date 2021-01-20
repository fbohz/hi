describe('Exercise', () => {

  function sayGoodbye(name?: string): string {
    if (!name) {
      return 'No Name!';
    }
    return 'Goodbye ' + name + '!';
  }

  let actualValue,
    expectedValue;

  describe('METHOD: sayGoodbye', () => {

    beforeEach(() => {
      console.log('I LOVE MY LLAMAS!');
    });

    it('should return goodbye Bonnie', () => {
      expectedValue = 'Goodbye Bonnie!';
      actualValue = sayGoodbye('Bonnie');

      expect(actualValue).toEqual(expectedValue);
    });

    describe('no input', () => {

      it('should handle a call with no input', () => {
        expectedValue = 'No Name!';
        actualValue = sayGoodbye();

        expect(actualValue).toEqual(expectedValue);
      });
    });

  });
});