import stockService from './services/stock-service';
import { findLongestBullish } from './utils';

console.log(findLongestBullish(stockService.getData()));
