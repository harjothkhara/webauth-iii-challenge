import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './auth/Login'; 

function App() {
  return (
    <>
      <header>
          <NavLink to='/login'>Login</NavLink>
      </header>
      <main>
        <Route path='/login' component={Login} />
      </main>
    </>
  );
}

export default App;
