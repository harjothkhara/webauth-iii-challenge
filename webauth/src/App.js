import React from 'react'; // <<<<<<<<<<<<<
import { Route, NavLink, withRouter } from 'react-router-dom'; // <<<<<<<<<<<<< withRouter - properties like history will be available

import './App.css';
import Login from './auth/Login'; // <<<<<<<<<<<<<
import SignUp from './auth/SignUp';  //<<<<<<<<<<<<
import Users from './users/Users'; //<<<<<<<<<

function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login')
  }
  return (
    <>
      <header>
          <NavLink to='/login'>Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/users'>Users</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/register'>Register</NavLink>
          &nbsp;|&nbsp;
          <button type="button" onClick={logout}>
            Logout
           </button>
      </header>
      <main>
        <Route path = '/login' component={Login} />
        <Route path="/register" component={SignUp} /> 
        <Route path = '/users' component={Users} /> 
        {/* rendering whatever comes out of this requiresAuth(Users) */}
      </main>
    </>
  );
}

export default withRouter(App);