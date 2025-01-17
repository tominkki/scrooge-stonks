import supertest from 'supertest';
import httpServer from '../../src/server';
import { expectedUploadRes } from './expected';

const app = supertest(httpServer);
const endpoint = '/api/upload';

const validFile = `${__dirname}/files/valid.csv`;
const invalidFile = `${__dirname}/files/invalid.csv`;

describe('Upload endpoint tests:', () => {
  test('response status should be 200 with valid file', async () => {
    const { body } = await app.post(endpoint)
      .attach('file', validFile)
      .expect(200);

    expect(body).toMatchObject(expectedUploadRes);
  });

  test('response status should be 400 and text \'Invalid data\' with invalid file', async () => {
    const res = await app.post(endpoint)
      .attach('file', invalidFile);

    expect(res.status).toBe(400);
    expect(res.text).toBe('Invalid data');
  });
});
