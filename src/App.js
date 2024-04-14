import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage'; // Добавляем импорт для компонента HomePage

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Straniza} />
        <Route path="/mortgage" component={OtherPage} />
        <Route path="/home" exact component={HomePage} /> {/* Добавляем маршрут для компонента HomePage */}
        <Route path="/real-estate-catalog" component={RealEstateCatalog} />
      </Switch>
    </Router>
  );
}

export default App;
