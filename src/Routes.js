import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home/index.';
import Repositores from './pages/Repositores';
import Followers from './pages/Followers';
import Following from './pages/Following';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" exact component={ Repositores } />
            <Route path="/followers" exact component={ Followers } />
            <Route path="/following" exact component={ Following } />
        </Switch>
    </BRouter>
);

export default Routes;