import { isNumber, isDate, isArray } from '../../src/utils';

describe('Type guard tests:', () => {
  describe('isNumber() tests:', () => {
    test('should return true with primitive number', () => {
      const result = isNumber(123);

      expect(result).toBeTruthy();
    });

    test('should return true with Number object', () => {
      const result = isNumber(new Number(12));

      expect(result).toBeTruthy();
    });

    test('should return false with string', () => {
      const result = isNumber('222');

      expect(result).toBeFalsy();
    });
  });

  describe('isDate() tests:', () => {
    test('should return true with Date object', () => {
      const result = isDate(new Date('10/10/2021'));

      expect(result).toBeTruthy();
    });

    test('should return true with valid date string', () => {
      const result = isDate('10/10/2021');

      expect(result).toBeTruthy();
    });

    test('should return false with invalid date string', () => {
      const result = isDate('22/22/2020');

      expect(result).toBeFalsy();
    });
  });

  describe('isArray() tests:', () => {
    test('should return true with empty array', () => {
      const result = isArray([]);

      expect(result).toBeTruthy();
    });

    test('should return true with new Array(20)', () => {
      const result = isArray(new Array(20));

      expect(result).toBeTruthy();
    });

    test('should return false with string', () => {
      const result = isArray('11, 212, 231');

      expect(result).toBeFalsy();
    });
  });
});
