import data from './data.js';

const getPosition = (data: string[]) => {
  let x = 0;
  let y = 0;

  data.map((curr) => {
    const control = curr.split(' ')[0];
    const value = Number(curr.split(' ')[1]);

    switch (control) {
      case 'forward':
        return (x += value);
      case 'down':
        return (y += value);
      case 'up':
        return (y -= value);
      default:
        return;
    }
  });

  return { x, y };
};

const multiplyNumbers = (a: number, b: number) => {
  return a * b;
};

const { x, y } = getPosition(data);
const answer = multiplyNumbers(x, y);

export { answer };
