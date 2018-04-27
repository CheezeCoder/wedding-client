import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { App } from 'app';

// enable MobX strict mode
useStrict(true);

// prepare MobX stores
const history = createBrowserHistory();

// render react DOM
ReactDOM.render(
  <Provider>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
