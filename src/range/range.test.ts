import { range } from "./range";

describe('range', () => {
  it('should return a range of the correct size, starting at 0, if not given a start value', () => {
    const result = range(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  it('should return a range of the correct size, starting at the given value', () => {
    const result = range(5, 1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('the result should be iterable', () => {
    const size = 5;
    let x = 0;
    let addOne = () => x++;
    range(size).forEach(addOne);
    expect(x).toBe(size);
  });
});