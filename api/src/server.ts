import stockService from './services/stock-service';
import { byVolume } from './utils';

console.log(stockService.getData().sort((a,b) => byVolume(a,b)));
