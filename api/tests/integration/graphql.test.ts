import 'cross-fetch/polyfill';
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import supertest from 'supertest';

import server from '../../src/server';
import { expectedDates, expectedLongest } from './expected';

const app = supertest(server);
const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache({
    addTypename: false,
    resultCaching: false
  })
});

const valid = `${__dirname}/files/valid.csv`;

beforeAll(async () => {
  server.listen(3000);
  await app.post('/api/upload')
    .attach('file', valid);
});

afterAll(async () => {
  server.close();
});

describe('GraphQl endpoint tests:', () => {
  test('response data has valid dates', async () => {
    const query = gql`
      query {
        dailyData {
          date
        }
      }
    `;

    const res = await client.query({
      query
    });

    expect(res.data.dailyData).toEqual(expectedDates);
  });

  test('longest bullish response is valid', async () => {
    const query = gql`
      query {
        longestBullish {
          length
          timespan {
            start
            end
          }
          stockData {
            date
            close
            volume
            open
            high
            low
            SMA
          }
        }
      }
    `;

    const res = await client.query({
      query
    });

    expect(res.data.longestBullish).toEqual(expectedLongest);
  });
});
