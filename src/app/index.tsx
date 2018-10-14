import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { Home } from 'app/pages/Home';
import { Details } from 'app/pages/Details';
import { Gifts } from 'app/pages/Gifts';
import '../../node_modules/luxbar/build/luxbar.min.css';
import { Guest } from 'app/pages/Guest';
import { Profile } from 'app/pages/Profile';
import { News } from 'app/pages/News';
import { Stream } from 'app/pages/Stream';
import { Casa } from 'app/pages/BusRoutes/Casa';
import { Grand } from 'app/pages/BusRoutes/Grand';
import { Lassi } from 'app/pages/BusRoutes/Lassi';
import { Liberatos } from 'app/pages/BusRoutes/Liberatos';
import { Lorenzo } from 'app/pages/BusRoutes/Lorenzo';
import { Mediterannee } from 'app/pages/BusRoutes/Mediterannee';
import { Oskar } from 'app/pages/BusRoutes/Oskar';
import { Stavento } from 'app/pages/BusRoutes/Stavento';
import { Thalassa } from 'app/pages/BusRoutes/Thalassa';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/gifts" component={Gifts} />
        <Route path="/guest" component={Guest} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/stream" component={Stream} />
        <Route exact path="/routes/casa" component={Casa} />
        <Route exact path="/routes/grand" component={Grand} />
        <Route exact path="/routes/lassi" component={Lassi} />
        <Route exact path="/routes/liberatos" component={Liberatos} />
        <Route exact path="/routes/lorenzo" component={Lorenzo} />
        <Route exact path="/routes/Mediterannee" component={Mediterannee} />
        <Route exact path="/routes/oskar" component={Oskar} />
        <Route exact path="/routes/stavento" component={Stavento} />
        <Route exact path="/routes/thalassa" component={Thalassa} />
      </Switch>
    </Router>
  </Root>
));
