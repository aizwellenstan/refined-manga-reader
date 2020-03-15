import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { StoreContext } from 'redux-react-hook';
// import { Root } from './views/root';
// import { configureStore } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import { ApolloProvider } from "@apollo/react-hooks";
import qraphqlClient from "../src/api/graphql";
import Search from "../src/antd/Search";

import "./global.less"

(async () => {
  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }

  const mountNode = document.getElementById('root');
  if (!mountNode) return;

  // const store = configureStore();

  const App = () => {
    return <Search />;
  };

  ReactDOM.render(
    <ApolloProvider client={qraphqlClient}>
      <App />
    </ApolloProvider>,
    mountNode,
  );
})();
