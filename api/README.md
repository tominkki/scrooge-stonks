# Scrooge api

## /api/upload
Used to upload stock data. Sends parsed stock data as response.

## /api/graphql
GraphQl endpoint for queries.

### longestBullish:
```
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
```
variables:
  - timespan: { start: String!, end: String! }
    

### dailyData:
```
query {
  dailyData {
    date
    close
    volume
    open
    high
    low
    SMA
  }
}
```
variables:
  - timespan: { start: String!, end: String! }
    - defines timespan
  - sortByVolume: boolean
    - if true, returns data sorted descending by trading volume
  - sortBySMA: boolean
    - if true, return data sorted descending by 5 day SMA

## Scripts
  - `npm start`:
    - starts production build
  - `npm run dev`:
    - starts development server
  - `npm run lint`:
    - eslint
  - `npm run build:app`:
    - makes production build
  - `npm run build:ui`:
    - makes production build of ui (webapp)
  