/**
 * Returns a number between 1 and 2547 (comic quantity)
 */
export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 2547 + 1);
};
