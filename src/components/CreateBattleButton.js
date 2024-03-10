import React from "react";
import { Link } from "react-router-dom";

function CreateBattleButton() {
    return (
        <div>
            <div>
                <Link to="/organize">
                    <button className="create_tournament_btn">Create Your Tournament</button>
                </Link>
            </div>
        </div>
    );
}

export { CreateBattleButton };