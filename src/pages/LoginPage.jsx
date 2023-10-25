import React, { Component } from 'react';

export default class LoginPage extends Component{
    state = {
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
        console.log(this.state)
    }
    render(){
        return(
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