import seedrandom from 'seedrandom';

const getRng = () => {
  return seedrandom();
}

export const randomInt = (min: number, max: number) => {
  const rng = getRng();
  return Math.floor(rng() * (max - min + 1) + min);
}