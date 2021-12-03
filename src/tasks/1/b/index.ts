import { countIncreasedValues } from "../a/index.js";

import data from "./data.js";

const getSumOfTriplets = (data: string[]): string[] => {
  return data.map((curr, idx: number, array: string[]): string => {
    /**
     * Check if index is greater than two, since
     * pattern begins on the 3rd number then everyone
     * there after.
     */
    if (idx >= 2) {
      const sum =
        parseInt(curr) + parseInt(array[idx - 1]) + parseInt(array[idx - 2]);

      return sum.toString();
    }

    return "";
  });
};

const dataArr = getSumOfTriplets(data);
const answer = countIncreasedValues(dataArr);

export { answer, getSumOfTriplets };
