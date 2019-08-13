export const range = (items: number, startAt: number = 0): number[] => {
  const result: number[] = [];
  for (let i = 0, num = startAt; i < items; i++ , num++) {
    result[i] = num;
  }
  return result;
}