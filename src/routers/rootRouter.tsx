import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, SingleNews } from 'screens';

const RootRouter = () => (
  <Switch>
    <Route path="/news/:id">
      <SingleNews />
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
export default RootRouter;
