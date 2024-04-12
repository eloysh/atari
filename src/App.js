import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Straniza} />
        <Route path="/mortgage" component={OtherPage} />
      </Switch>
    </Router>
  );
}

export default App;
