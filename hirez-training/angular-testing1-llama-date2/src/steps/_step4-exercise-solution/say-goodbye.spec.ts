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

    let fakeUserName: string;

    When(() => {
      actualValue = sayGoodbye(fakeUserName);
    });

    describe('Name is Bonnie', () => {

      Given(() => {
        fakeUserName = 'Bonnie';
      });

      Then(() => {
        expect(actualValue).toEqual('Goodbye Bonnie!');
      });
    });

    describe('No name', () => {

      Given(() => {
        fakeUserName = null;
      });

      Then(() => {
        expect(actualValue).toEqual('No Name!');
      });
    });


  });

});
