import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
function Register() {
    return (
        <div>
            <Nav />

            <form className="login_form" action="post">
                
                <div className="login_form_group">
                    <label id="login_email_label" for="email">Email</label>
                    <input type="email" id="login_email_input"/>
                </div>
                <div className="login_form_group">
                    <label id="login_password_label" for="password">Password</label>
                    <input type="password" id="login_password_input"/>
                </div>
                
                <div className="login_form_group">
                    <button type="submit" className="login_form_btn">Login</button>
                </div>
                
                <p>or</p>
                
                <div className="login_form_group">
                    <button className="auth_btn" id="google_btn">
                        <i className="fab fa-google"></i> 
                        Login with Google
                    </button>
                </div>
                
                <div className="login_form_group">
                    <button className="auth_btn" id="facebook_btn">
                        <i className="fab fa-facebook-f"></i> 
                        Login with Facebook
                    </button>
                </div>
                
            </form>

            <Footer />
        </div>
    );
}

export default Register;