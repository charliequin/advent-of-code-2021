import { readFileSync, appendFile } from "fs";

const readData = (fileName: string): string[] => {
  return readFileSync(fileName).toString().split("\n");
};

const writeFile = (dataArr: string[], fileName: string): void => {
  const formatData = dataArr.map((str) => `'${str}'`);
  appendFile(fileName, `[${formatData}]`, (err) => {
    if (err) throw err;
  });
};

const createData = (path: string, fileName: string) => {
  const data = readData(path);
  return writeFile(data, fileName);
};

export { createData };
