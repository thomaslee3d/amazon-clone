import React from 'react'
import "./Login.css";

function Login() {
    return (
        
      <div className="login">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=''/>
        <div className="login__email">
          <h1>Sign In</h1>
          <h3>Email (phone for mobile accounts)</h3>
          <input></input>
          <div className="login__terms">
            <button>Sign In</button>
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Login
