import React from "react";
import { Link } from "react-router-dom";

function WatchLiveButton() {
    return (
        <div>
            <Link to="/watch_live">
                <button className="watch_button">Watch Live</button>
            </Link>
        </div>
    );
}

export default WatchLiveButton;