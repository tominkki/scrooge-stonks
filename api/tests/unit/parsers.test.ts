import { parseNumber, parseDate, parseDailyData } from '../../src/utils';

describe('Parsers tests:', () => {
  describe('parseNumber() tests:', () => {
    test('should return primitive number with number input', () => {
      const result = parseNumber(5);

      expect(typeof result).toBe('number');
      expect(result).toBe(5);
    });

    test('should return primitive number with Number object input', () => {
      const result = parseNumber(new Number(5));

      expect(typeof result).toBe('number');
      expect(result).toBe(5);
    });

    test('should throw \'Invalid data\' error with string input', () => {
      expect(() => {
        parseNumber('123');
      }).toThrowError('Invalid data');
    });
  });

  describe('parseDate() tests:', () => {
    test('should return Date object with Date object input', () => {
      const result = Object.prototype.toString.call(parseDate(new Date('10/10/2020')));

      expect(result).toBe('[object Date]');
    });

    test('should return Date object with valid date string input', () => {
      const result = Object.prototype.toString.call(parseDate('10/10/2020'));

      expect(result).toBe('[object Date]');
    });

    test('should throw \'Invalid data\' error with invalid date string input', () => {
      expect(() => {
        parseDate('22/22/2222');
      }).toThrowError('Invalid data');
    });

  });

  describe('parseDailyData() tests:', () => {
    test('should return StockData object with valid data', () => {
      const testData = {
        date: '01/20/2021', 
        close: 132.03,
        volume: 104319500,
        open: 128.66,
        high: 132.49,
        low: 128.55
      };

      const expectedOutput = {
        date: new Date('01/20/2021Z'), 
        close: 132.03,
        volume: 104319500,
        open: 128.66,
        high: 132.49,
        low: 128.55,
        SMA: 0
      };

      const result = parseDailyData(testData);

      expect(result).toEqual(expectedOutput);
    });

    test('should throw \'Invalid data\' error with invalid data', () => {
      const testData = {
        date: new Date('01/20/2021'), 
        close: 132.03,
        volume: 104319500,
        open: 128.66,
        high: 132.49,
      };

      expect(() => {
        parseDailyData(testData);
      }).toThrowError('Invalid data');
    });
  });
});
