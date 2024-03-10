import React from "react";
import { Link } from "react-router-dom";

function NavLoginButton() {
    return (
        <div>
            <Link to="/register">
                <button className="nav_login_button">Login / SignUp</button>
            </Link>
        </div>
    );
}

export default NavLoginButton;