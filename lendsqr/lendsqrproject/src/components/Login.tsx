import React from 'react';
import './Login.scss';  //Import the SCSS file
import lendsqr from './lendsqr.png';

const Login: React.FC = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <img src={lendsqr} alt="LendSQR Logo" />
            </div>
            <div className="login-right">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>
                <form>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <p className="show">SHOW</p>
                    </div>
                    <p className="forgot">FORGOT PASSWORD?</p>
                    <button type="submit" className="btn btn-primary">LOG IN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;