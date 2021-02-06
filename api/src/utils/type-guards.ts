/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const isNumber = (param: any): param is number => {
  return typeof param === 'number' || param instanceof Number;
};

export const isDate = (param: any): param is Date => {
  return !isNaN(Date.parse(param));
};

export const isArray = (param: any): param is Array<any> => {
  return Array.isArray(param);
};
