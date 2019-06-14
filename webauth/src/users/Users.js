import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
    state = {
        users:[],
    };

    render() {
        return (
            <>
            <h2>Our Users</h2>
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
          </>
        );
    }

    componentDidMount() {
        const endpoint = '/users';
        // const endpoint = 'http://localhost:5000/api/users';
        // const token = localStorage.getItem('jwt'); //if the token is not there this will not even get sent - will be undefined
        // const requestConfig = {  //for assembling headers
        //     headers: {
        //         authorization: token
        //     }
        // };
          // .get(endpoint, requestConfig) not need for this now - see requiresAuth
        axios.get(endpoint) //config
        .then(res => {
            this.setState({ users: res.data });
        })
        .catch(err => console.log(err));
    }
}

export default requiresAuth(Users); //passing in Users component through the requiresAuth function
