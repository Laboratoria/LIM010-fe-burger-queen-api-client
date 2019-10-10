import React, { Component } from 'react';
import logoBurgerQueen from '../images/burger.png';
import '../styles/Login.css';

class LoginInicio extends Component {
    render() {
        return (
            <div className="LoginInicio">
                <form>
                    <div className="Logo">
                        <img src={logoBurgerQueen} alt="logoBurgerQueen" />
                        <input id="txt-email" type="email" placeholder="Email"/>
                        <input id="txt-password" type="password" placeholder="Password"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginInicio;