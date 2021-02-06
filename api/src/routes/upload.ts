import express from 'express';
import multer from 'multer';

import { StockData } from '../types';
import { parseCsv } from '../utils';
import cache from '../services/cache';

const uploadRouter = express.Router();
const upload = multer({ dest: 'tmp/csv/' });

uploadRouter.post('/', upload.single('file'), async (req, res) => {
  try {
    const data: StockData[] = await parseCsv(req.file.path);

    cache.flushAll();
    cache.set('STOCK-DATA', data);

    res.sendStatus(200);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export { uploadRouter };
