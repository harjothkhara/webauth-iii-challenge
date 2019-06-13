import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './auth/Login';
import Users from './users/Users'; 

function App() {
  return (
    <>
      <header>
          <NavLink to='/login'>Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to ='/users'>Users</NavLink>
      </header>
      <main>
        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />
      </main>
    </>
  );
}

export default App;
