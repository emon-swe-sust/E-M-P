import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'
import Employee from './components/Employee';
import Holidays from './components/Holidays';
import Teams from './components/Teams';
import Project from './components/Project';
import Leave from './components/Leave';
import UpdateTeam from './components/UpdateTeam';
import UpdateProject from './components/UpdateProject';
import UpdateHoliday from './components/UpdateHoliday';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Employee /> */}
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/employees/" component={Employee} />
          <Route exact path="/employee/details/:id/" component={Profile} />
          <Route exact path="/holidays/" component={Holidays} />
          <Route exact path="/teams/" component={Teams} />
          <Route exact path="/projects/" component={Project} />
          <Route exact path="/leave/" component={Leave} />    
          <Route exact path="/update/employee/:id/" component={UpdateEmployee} />
          <Route exact path="/update/team/:id/" component={UpdateTeam} />
          <Route exact path="/update/project/:id/" component={UpdateProject} />
          <Route exact path="/update/holiday/:id/" component={UpdateHoliday} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
