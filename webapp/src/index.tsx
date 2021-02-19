import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ApolloClient, createHttpLink,
  InMemoryCache, ApolloProvider
} from '@apollo/client';

import App from './App';
import { StoreProvider, reducer } from './store';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#01579b'
    },
    secondary: {
      main: '#f04e30'
    },
    background: {
      default: '#1D1F21',
      paper: '#282B2D'
    }
  }
});

const link = createHttpLink({
  uri: 'http://localhost:4000/api/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StoreProvider reducer={reducer}>
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
