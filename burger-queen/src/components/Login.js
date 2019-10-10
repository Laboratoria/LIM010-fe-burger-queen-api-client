import React, { Component } from 'react';
import logoBurger from '../images/burger.png';
// import '../styles/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <form>
                    <div className="Logo">
                        <img src={logoBurger} alt="logo" />
                    </div>
                    <input id="txt-email" type="email" placeholder="Email"/>
                    <input id="txt-password" type="password" placeholder="Password"/>
                    <button></button>
                </form>
            </div>
        );
    }
}

export default Login;