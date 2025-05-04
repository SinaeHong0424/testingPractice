import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions';

describe('capitalize', () => {
  test('Capitalizes the first letter.', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('Handles empty strings.', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString', () => {
  test('Flips strings.', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Handles empty strings.', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator', () => {
  describe('add', () => {
    test('Adds two numbers.', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('Subtracts two numbers.', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  });

  describe('divide', () => {
    test('Divides two numbers.', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('Handles division by zero.', () => {
      expect(calculator.divide(5, 0)).toBeUndefined(); // 또는 다른 적절한 처리
    });
  });

  describe('multiply', () => {
    test('Multiplies two numbers.', () => {
      expect(calculator.multiply(2, 4)).toBe(8);
    });
  });
});

describe('caesarCipher', () => {
  test('Shifts each character by a given shift value.', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('Wraps z to a Wraps z to a.', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('Preserves case.', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('Does not change punctuation.', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('Handles empty strings.', () => {
    expect(caesarCipher('', 3)).toBe('');
  });

  test('Handles negative shift values.', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
  });
});

describe('analyzeArray', () => {
  test('Accurately calculate the average, minimum, maximum, and length of an array.', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('Handle an empty array.', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN, 
      min: Infinity, 
      max: -Infinity, 
      length: 0,
    });
  });

  test('Handle an array with only one element.', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});