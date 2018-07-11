import './style/main.scss';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import Header from './components/Header';
import reducers from './modules/apps';
import routes from './routes';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk),
);

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      {routes.map((item, index) => <Route key={index} {...item} />)}
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
