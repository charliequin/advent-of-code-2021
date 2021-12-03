import data from './data.js';

const getGammaRate = (data: string[], index: number): number => {
  /**
   * Map over data and build new array selecting
   * items at given index, then filter to find total
   * that amount to 0.
   */
  const mappedArr = data
    .map((curr) => Number(curr[index]))
    .filter((num) => num === 0);

  /**
   * Check if number of 0s are greater than number of 1's to find the mode.
   */

  return mappedArr.length > data.length - mappedArr.length ? 0 : 1;
};

const getRates = (data: string[]) => {
  /**
   * Map over columns for data set size.
   */
  const gammaRates = data[0].split('').map((_, idx) => {
    return getGammaRate(data, idx);
  });

  const epsilonRates = gammaRates.map((curr) => (curr === 0 ? 1 : 0));

  const gammaRateConverted = parseInt(gammaRates.join(''), 2);
  const epsilonRatesConverted = parseInt(epsilonRates.join(''), 2);

  return {
    gamma: gammaRateConverted,
    epsilon: epsilonRatesConverted,
  };
};

const getPowerConsumption = (a: number, b: number): number => a * b;

const { gamma, epsilon } = getRates(data);
const answer = getPowerConsumption(gamma, epsilon);

export { answer };
