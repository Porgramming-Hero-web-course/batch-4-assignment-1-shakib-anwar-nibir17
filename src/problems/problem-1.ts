const sumArray = (numberArray: number[]): number => {
  return numberArray.reduce((sum: number, number: number) => sum + number, 0);
};
