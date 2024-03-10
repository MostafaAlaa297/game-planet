import React from "react";

function SelectOptions(props) {
    return (
        <div>
            {props.name === "game" ? <select id={props.name}>
                <option value="League of Legends">League of Legends</option>
                <option value="DOTA 2">DOTA 2</option>
                <option value="CSGO">CSGO</option>
                <option value="Valorant">Valorant</option>
                <option value="Rocket League">Rocket League</option>
            </select> : <select id={props.name}>
                        <option value="Middle East">Middle East</option>
                        <option value="West Europe">West Europe</option>
                        <option value="East Europe">East Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                    </select>}
        </div>
    );
}

export default SelectOptions;