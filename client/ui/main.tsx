import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { StoreContext } from 'redux-react-hook';
// import { Root } from './views/root';
// import { configureStore } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import { ApolloProvider } from "@apollo/react-hooks";
import qraphqlClient from "../src/api/graphql";
import Search from "../src/antd/search";
import "./global.less"

(async () => {
  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }

  const mountNode = document.getElementById('root');
  if (!mountNode) return;

  // const store = configureStore();

  const Root = () => {
    return (
      <div className="main-container">
        <div className="main-search-container">
          <Search />
        </div>
      </div>
    )
  };

  ReactDOM.render(
    <ApolloProvider client={qraphqlClient}>
      <Root />
    </ApolloProvider>,
    mountNode,
  );
})();
