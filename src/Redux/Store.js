import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./Reducers/Index";

// Check if Redux DevTools Extension is installed and enabled
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
