export const getUniqueRandomNumbers = (min: number, max: number, quantity: number): number[] => {
  if (max - min + 1 < quantity) {
    throw new Error("Range is too small to generate the required quantity of unique numbers.");
  }

  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < quantity) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
};
