import React from 'react';
import "./normalize.css";
import Home from './routes/Home';
import Login from './routes/Login';
import StudentSignup from './routes/StudentSignup';
import ClientSignup from './routes/ClientSignup';
import StudentDashboard from './routes/StudentDashboard';
import ClientDashboard from './routes/ClientDashboard';
import NewBrief from './routes/NewBrief';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/Login" component={ Login } />
          <Route path="/StudentSignup" component={ StudentSignup } />
          <Route path="/ClientSignup" component={ ClientSignup } />
          <Route path="/StudentDashboard" component={ StudentDashboard } />
          <Route path="/ClientDashboard" component={ ClientDashboard } />
          <Route path="/NewBrief" component={ NewBrief } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
