import React from "react";
import {CreateBattleButton as Button} from "./CreateBattleButton";

function CreateBattle() {
    return (
    <div>   
        <div id="create_tournament_container">
            <img src="./img/Vteam.jpg" className="team_img" alt="Valorant!" />
            <Button />     
        </div>
    </div>
    );
}
export default CreateBattle;