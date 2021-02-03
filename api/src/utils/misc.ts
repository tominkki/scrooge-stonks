export const inRange = (date: Date, start: Date, end: Date): boolean => (
  start.getTime() <= date.getTime() && date.getTime() <= end.getTime()
);
