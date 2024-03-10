// Welcome.js
import React from "react";
import Nav from "./Nav";
import WatchLiveButton from "./WatchLiveButton";

function Welcome() {
    return (
        <div>
            <Nav />
            <div className="welcome-section">
                <h1 className="welcome-title">Welcome to game planet</h1>
                <p className="welcome-text">
                    <b>A place where you can watch, join, and organize your tournaments...</b>
                </p>
            </div>
            <WatchLiveButton />
        </div>
    );
}

export default Welcome;
