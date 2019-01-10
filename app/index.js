import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './router/router';
import Home from './components/Home';
import './app.global.css';

render(
  <AppContainer>
    <Router />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./router/router', () => {
    // eslint-disable-next-line global-require
    const Router = require('./router/router').default;
    render(
      <AppContainer>
        <Router />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
