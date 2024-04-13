import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog.js';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Straniza} />
        <Route path="/mortgage" component={OtherPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/real-estate-catalog" component={RealEstateCatalog} />
      


      </Switch>
    </Router>
  );
}

export default App;
