import React from 'react';
import type {Node} from 'react';
import Navigation from "./app/config/router";
import { Provider } from "react-redux";
import { store } from "./app/store/config/store";

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
