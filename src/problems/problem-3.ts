const countWordOccurrences = (text: string, word: string): number => {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  const words: string[] = lowerCaseText.split(/\W+/);
  const occurrences: number = words.filter(
    (word: string) => word === lowerCaseWord
  ).length;
  return occurrences;
};

const result3 = countWordOccurrences("I love typescript", "typescript");
