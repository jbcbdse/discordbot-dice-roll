import { randomInt } from "./random";

describe('random number module', () => {
  describe('randomInt', () => {
    it('should return a number between the min and max', () => {
      const min = 1;
      const max = 6;
      for (let i = 0; i < 10; i++) {
        const result = randomInt(min, max);
        expect(result).toEqual(Math.floor(result));
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });
    it('should return the number when min and max are equal', () => {
      const theNumber = 5;
      const result = randomInt(theNumber, theNumber);
      expect(result).toBe(theNumber);
    })
  });
})