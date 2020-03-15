import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { StoreContext } from 'redux-react-hook';
import { Root } from './views/root';
// import { configureStore } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import { ApolloProvider } from "@apollo/react-hooks";

import client from "../src/api/graphql";
import "./global.less"

(async () => {
  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }

  const mountNode = document.getElementById('root');
  if (!mountNode) return;

  // const store = configureStore();

  ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ApolloProvider>,
    mountNode,
  );
})();
