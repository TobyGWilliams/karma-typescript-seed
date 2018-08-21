import HelloWorld from './index';
describe('HelloWorld class', () => {
  it('welcome message', () => {
    const greeter = new HelloWorld('User');
    expect(greeter.getMessage()).toBe('Hello: User');
  });
  it('true should be true', () => {
    expect(true).toBe(true);
  });
});
