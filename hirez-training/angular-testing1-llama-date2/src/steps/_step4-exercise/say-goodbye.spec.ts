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

    it('should return goodbye Bonnie', () => {

      // GIVEN
      let fakeUserName = 'Bonnie';

      // WHEN
      actualValue = sayGoodbye(fakeUserName);

      // THEN
      expect(actualValue).toEqual('Goodbye Bonnie!');
    });

  });

});