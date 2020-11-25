import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <nav>
            <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
              <li style={{margin: '10px', display: 'inline-block'}}>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li style={{margin: '10px', display: 'inline-block'}}>
                <NavLink to="/courses">Courses</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses/" />
          <Route render={() => <h1 style={{textAlign: 'center', color: 'red'}}>Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
