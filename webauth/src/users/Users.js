import React from 'react';
import axios from 'axios';

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
        const endpoint = 'http://localhost:5000/api/users';
        const token = localStorage.getItem('jwt') //if the token is not there this will not even be sent -  will be undefined
        const requestConfig = {
            headers: {
                authorization: token
            }
        }

        axios.get(endpoint, requestConfig)
        .then(res => {
            this.setState({ users: res.data });
        })
        .catch(err => console.log(err));
    }
}

export default Users;