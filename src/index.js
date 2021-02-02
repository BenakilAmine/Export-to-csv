import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";

const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com",
  typeDefs,
  resolvers: {}
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


