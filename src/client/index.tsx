import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
// import { LOADING_TIP } from './constants';
import Routes from './router';

const { lazy, Suspense } = React;

const App = lazy(() => import('./containers/App/index'));

ReactDOM.render(
  <Suspense fallback={<Loading height="100vh" />}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
