import { inRange, arrayAverage, byVolume } from '../../src/utils';
import { StockData } from '../../src/types';

describe('Misc util tests:', () => {

  describe('inRange() tests:', () => {
    test('2/10/2020 should be in range 2/5/2020 - 2/15/2020', () => {
      const result = inRange(
        new Date('2/10/2020'),
        new Date('2/5/2020'),
        new Date('2/15/2020')
      );

      expect(result).toBe(true);
    });

    test('2/15/2020 should be in range 2/5/2020 - 2/15/2020', () => {
      const result = inRange(
        new Date('2/15/2020'),
        new Date('2/5/2020'),
        new Date('2/15/2020')
      );

      expect(result).toBe(true);
    });

    test('2/5/2020 should not be in range 2/10/2020 - 2/15/2020', () => {
      const result = inRange(
        new Date('2/5/2020'),
        new Date('2/10/2020'),
        new Date('2/15/2020')
      );

      expect(result).toBe(false);
    });

    test('2/16/2020 should not be in range 2/10/2020 - 2/15/2020', () => {
      const result = inRange(
        new Date('2/16/2020'),
        new Date('2/10/2020'),
        new Date('2/15/2020')
      );

      expect(result).toBe(false);
    });
  });

  describe('arrayAverage() tests:', () => {
    const testArrays: Array<Array<number>> = [
      [ 1, 2, 3 ],
      [ 10, 20, 30, 40, 50 ],
      [ 12, 22, 33, 2, 123 ],
      []
    ];

    test('[1, 2, 3] average should be 2', () => {
      const result = arrayAverage(testArrays[0]);

      expect(result).toBe(2);
    });

    test('[10, 20, 30, 40, 50] average should be 30', () => {
      const result = arrayAverage(testArrays[1]);

      expect(result).toBe(30);
    });

    test('[12, 22, 33, 2, 123] average should be 38.4', () => {
      const result = arrayAverage(testArrays[2]);

      expect(result).toBe(38.4);
    });

    test('empty array should return NaN', () => {
      const result = arrayAverage(testArrays[3]);

      expect(result).toBe(NaN);
    });
  });

  describe('byVolume() tests:', () => {
    const testData: StockData[] = [
      {
        date: new Date('01/20/2021'),
        close: 132.03,
        volume: 104319500,
        open: 128.66,
        high: 132.49,
        low: 128.55,
        SMA: 0
      },
      {
        date: new Date('01/19/2021'),
        close: 127.83,
        volume: 90757330,
        open: 127.78,
        high: 128.71,
        low: 126.938,
        SMA: 0
      },
      {
        date: new Date('01/19/2021'),
        close: 130.83,
        volume: 90757330,
        open: 127.78,
        high: 128.71,
        low: 126.938,
        SMA: 0
      }
    ];

    test('should return -1 with test data', () => {
      const result = byVolume(testData[0], testData[1]);

      expect(result).toBe(-1);
    });

    test('should return 1 with test data', () => {
      const result = byVolume(testData[1], testData[0]);

      expect(result).toBe(1);
    });

    test('should return positive number with test data', () => {
      const result = byVolume(testData[1], testData[2]);

      expect(result).toBeGreaterThan(0);
    });

    test('should return negative number with test data', () => {
      const result = byVolume(testData[2], testData[1]);

      expect(result).toBeLessThan(0);
    });

    test('should return 0 with identical data', () => {
      const result = byVolume(testData[1], testData[1]);

      expect(result).toBe(0);
    });
  });
});
