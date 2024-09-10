import { sayHello } from './hello';

describe('hello', () => {
  test('sayHello', () => {
    expect(sayHello('Soojin')).toBe('Hello, Soojin');
  });
});
