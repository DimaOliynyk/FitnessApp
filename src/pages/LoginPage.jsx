import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const serverBaseUrl = "http://localhost:5000/api";

export default class LoginPage extends Component{
    state = {
        isLogin: false,
        username: "",
        password: ""
    }

    constructor(p) {
        super(p);
        this.sendUser = this.sendUser.bind(this);
    } 

    handleUser = (e) => {
        if(e.target.id === 'username'){
            this.setState({ username: e.target.value })
        } else if(e.target.id === 'password'){
            this.setState({ password: e.target.value })
        }
        // console.log(e.target.value)
    }

    sendUser(){
        axios.post(`${serverBaseUrl}/users/login`, {
            username: this.state.username,
            password: this.state.password
          })
          .then((res) => {
              if(res.data.data.token !== undefined){
                  localStorage.setItem('token', res.data.data.token);
                  this.setState({isLogin: true});
            } else {
                alert('wrong credentials!')
            }
          });
        
    }
    render(){
        if (this.state.isLogin) {
            return <Navigate to={`/profile/${this.state.username}`} />;
        } else return(
                <>
                    <h2>Login Page</h2>

                    <form>
                        <input type="text" placeholder="enter your username" id="username" onChange={this.handleUser}/>
                        <input type="text" placeholder="enter your password" id="password" onChange={this.handleUser}/>

                    </form>
                        <button onClick={this.sendUser}>submit</button>

                </>
            )
    }
}