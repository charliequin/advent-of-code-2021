import data from "./data.js";
const countIncreasedValues = (data: string[]): number => {
  /**
   * The initial value is increased by default,
   * so start at 1.
   */
  let increased = 1;

  data.map((curr: string, idx: number, array: string[]): string | null => {
    if (curr > array[idx - 1]) {
      increased = increased + 1;
    }

    return null;
  });

  return increased;
};

const answer = countIncreasedValues(data);

export { answer, countIncreasedValues };
