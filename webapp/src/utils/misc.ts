export const formatDate = (date: Date): string => (
  `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`
);
