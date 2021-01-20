describe('METHOD: getWelcomingMessage', () => {

  function getWelcomingMessage(userName: string): string {
    return `Hello ${userName}`;
  }

  let actualValue, expectedValue;

  beforeEach(() => {
    console.log('BEFORE');
  });

  it('should return hello with Bonnie', () => {

    actualValue = getWelcomingMessage('Bonnie');
    expectedValue = 'Hello Bonnie';  

    expect(actualValue).toEqual(expectedValue);
  });

  it('should return hello with Alyssa', () => {

    actualValue = getWelcomingMessage('Alyssa');
    expectedValue = 'Hello Alyssa';

    expect(actualValue).toEqual(expectedValue);
  });

  describe('Another sub use case', () => {

    it('should fail', () => {
      expect(true).toEqual(true);
    });
  });

});
