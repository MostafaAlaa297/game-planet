import React from "react";
import { Link } from "react-router-dom";

function Button() {
    return (
        <div>
            <Link to="/register">
                <button className="button">Login / SignUp</button>
            </Link>
        </div>
    );
}

export default Button;