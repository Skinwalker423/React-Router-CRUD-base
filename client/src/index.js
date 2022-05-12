import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from  'redux-thunk';


import reducers from "./reducers";

const rootElement = document.querySelector('#root');
const root = ReactDomClient.createRoot(rootElement);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );