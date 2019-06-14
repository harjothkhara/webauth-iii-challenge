import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api'; // process.env.REACT_APP_API_URL

//behaves like middleware
axios.interceptors.request.use(
    function(requestConfig) { //requestConfig - merging into axios, either axios has or you do.
        requestConfig.headers.authorization = localStorage.getItem('jwt');

        return requestConfig;
    },
    function(error) {
        return Promise.reject(error)
    }
 );

//function that takes in a component and return a component (HOC) ...if using fetch then need to do it within here (below)
export default function(Component) { //passing in Users component
    return class Authenticated extends React.Component { //rendering this authenticated component inside
        render() {
            //can i conditionally render this(Users) component based on whether i have a token or not?
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <h3> Please login to see the users </h3>

            return <>{token ? <Component {...this.props} /> : notLoggedIn}</>; 
            //HOC is making the decision of whether i want to display or not
        }
    };
}

//now i don't have to worry about authentication just need to focus on building my component and wrapping it around the requiresAuth HOC 
