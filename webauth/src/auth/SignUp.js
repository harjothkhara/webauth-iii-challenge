import React from 'react';
import axios from "axios";
// Importing withRouter to redirect upon register
import { withRouter } from 'react-router-dom'; 

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        department: ''
    };

    render() {
        return (
        <>
        <h2>Login</h2>
        <form onSubmit={this.submitForm}>
            <div>
                <label htmlFor='username' />
                    <input 
                        id='username' 
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        type="text"
                    />
                 </div>
            <div>
                <label htmlFor='password' />
                    <input 
                        id='password' 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        type="password"
                     />
                </div>
                <div>
                <label htmlFor='department' />
                    <input 
                        id='department' 
                        onChange={this.handleChange} 
                        value={this.state.department} 
                        type="text"
                     />
                </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </>
      );
    }

    handleChange = event => {
        const { id, value } = event.target;

        this.setState({ [id]: value });
    }; 
    
    submitForm = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:5000/api/auth/register';

        axios
          .post(endpoint, this.state)
          .then(res => {
           localStorage.setItem('jwt', res.data.token);
           this.props.history.push('/users');
        })
          .catch(err => {
            console.error('Login Error', err);
        });
    };
}

export default withRouter(SignUp);