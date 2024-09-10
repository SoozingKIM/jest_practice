import { sayHello } from './hello';

describe('hello', () => {
  test('sayHello', () => {
    expect(sayHello('0uizi0')).toBe('Hello, 0uizi0');
  });
});