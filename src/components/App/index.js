import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation'
import HomePage from '../Home'

import * as ROUTES from '../../constants/routes.js'

const App = () => {
  return (
    <Router>
        <div>

        <Navigation />
        
        <Route path={ROUTES.HOMEPAGE} component={HomePage} />

        </div>
    </Router>
  );
}

export default App;
