import React from "react";
import { TournamentsData } from "./TournamentsData";

function Tournaments() {
    return (
        <div>
            <div id="tournaments_container">
                {TournamentsData.map((tournament, index) => {
                    return <div className={`tournament_data tournament${index + 1}`}>
                                <img src={tournament.image} alt="tournament" className={`img${index + 1}`} />
                            </div>
                })} 
            </div>
        </div>
    );
}

export default Tournaments;