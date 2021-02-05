export const isNumber = (param: any): param is number => {
  return typeof param == 'number' || param instanceof Number;
};

export const isDate = (param: any): param is Date => {
  return Date.parse(param) === NaN ? false : true;
};

export const isArray = (param: any): param is Array<any> => {
  return Array.isArray(param);
};
