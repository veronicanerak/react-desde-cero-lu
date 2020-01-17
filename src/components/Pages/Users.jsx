import React, { Component } from "react";
import UserCard from '../Molecules/UserCard'
import axios from 'axios'
import UsersGrid from "../Organisms/UsersGrid";

class Users extends Component {
    
    constructor(props) {
        // The constructor passes the props by inheritance to the component in oder to make it created.
        super(props)

        this.state = {
            users: []
        }
    }

    // Making the request using FETCH
    /*
    componentDidMount() { // Una vez que el componente se haya montado
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'})
        .then(response => response.json())
        .then(response2 => {
            this.setState({
                users: response2
            })
        })        
    }
    */

    // Making the request using the library AXIOUS
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            this.setState({
                users: response.data
            })
        })
    }
   
  
    render() {
        const { users } = this.state
        return <UsersGrid users={ users } />
    }
}

export default Users