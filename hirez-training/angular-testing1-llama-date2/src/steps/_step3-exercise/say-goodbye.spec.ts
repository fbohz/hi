describe('Exercise', () => {

  function sayGoodbye(name?: string): string {
    if (!name) {
      return 'No Name!';
    }
    return 'Goodbye ' + name + '!';
  }

});