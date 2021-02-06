import fs from 'fs';
import * as csv from '@fast-csv/parse';
import { StockData } from '../types';
import { parseData } from '.';

interface CsvRow {
  date: string;
  close: string;
  volume: string;
  open: string;
  high: string;
  low: string;
}

interface ParsedRow {
  date: string;
  close: number;
  volume: number;
  open: number;
  high: number;
  low: number;
}

export const parseCsv = (path: fs.PathLike): Promise<StockData[]> => {

  const promise: Promise<StockData[]> = new Promise((resolve, reject) => {
    const rows: CsvRow[] = [];

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: [ 'date', 'close', 'volume', 'open', 'high', 'low' ], renameHeaders: true }))
      .on('data', row => rows.push(row))
      .on('error', error => reject(error))
      .on('end', () => {
        const strippedRows: ParsedRow[] = rows.map(row => ({
          date: row.date.trim(),
          close: parseFloat(row.close.replace('$', '')),
          volume: parseInt(row.volume),
          open: parseFloat(row.open.replace('$', '')),
          high: parseFloat(row.high.replace('$', '')),
          low: parseFloat(row.low.replace('$', ''))
        }));
        resolve(parseData(strippedRows));
        fs.unlinkSync(path);
      });
  });

  return promise;
};
