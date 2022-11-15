import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Styles/global.css";
import App from "./App";
//redux
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import globalReducer from "./Utils/reducer";
const rootReducer = combineReducers({ globalReducer });
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
