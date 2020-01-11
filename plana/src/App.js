import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './app.scss';

//Importing Components
import Title from './Presentational/Title';
import Time from './Presentational/Time';
import Where from './Presentational/Where';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Title} exact/>
        <Route path="/time" component={Time} />
        <Route path="/where" component={Where} />
      </Switch>
    </div>
  );
};

export default App;
