import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/base.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {brown} from '@material-ui/core/colors';
if (module.hot) {
  module.hot.accept();
}
const theme = createMuiTheme({
  palette: {
    primary: brown,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </React.Fragment>
  </Provider>
  , document.getElementById('root')
);
