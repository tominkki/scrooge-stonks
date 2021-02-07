import { dailyData, longestBullish } from './queries';
import { dateScalar } from './scalars';

export default {
  Date: dateScalar,
  Query: {
    dailyData,
    longestBullish
  }
};
