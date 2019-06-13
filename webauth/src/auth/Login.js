import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = { 
        username: 'luke',
        password: 'skywalker'
     };

     handleChange = e => {
        const { id, value } = e.target;

        this.setState({ [id]: value });
     };

     SubmitForm = e => {
         e.preventDefault();
         const endpoint = 'http://localhost:5000/api/auth/login';

         axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
            })
              .catch(err => {
                  console.log('Login Error', err)
              });
     };

    render() { 
        return (
        <>
        <h2> Login </h2>
        <form onSubmit={this.SubmitForm} >
            <div>
                <label htmlFor='username' />
                    <input
                        id='username'
                        onChange={this.handleChange}
                        value={this.state.username}
                        type='text'
                    />
            </div>
            <div>
                <label htmlFor='password' />
                    <input
                        id='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        type='password'
                    />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
        </>
    );
  }
}


 
export default Login;