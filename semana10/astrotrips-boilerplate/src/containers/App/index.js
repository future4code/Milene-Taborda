import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import StyledGlobal from '../../style/global';
import { Button } from './styles';

import Header from '../../components/Header/Header';
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const handleLogout = (e) => {
  localStorage.clear();
}

const isLogged = localStorage.getItem("token") !== null;
const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (

  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <Header />
          {isLogged && <Button onClick={handleLogout}>Logout</Button>} 
        <CssBaseline />
        <StyledGlobal />
        <Router history={history} />
    </MuiThemeProvider>
  </Provider>

);

export default App;
