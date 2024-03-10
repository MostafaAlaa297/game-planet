import React from "react";
import Tournaments from "./Tournaments";
// import SelectOptions from "./SelectOptions";
import Nav from "./Nav";
// import NavLoginButton from "./NavLoginButton";
import Footer from "./Footer";

function Browse() {
    return (
        <div>
            <Nav className="browse_nav"/>
            {/* <NavLoginButton /> */}
            <form className="browse_form" action="/action_page.php" method="get">
                <h4 className="browse_form_title"><strong>Ready to join?</strong></h4>
                {/* <SelectOptions name="game" />
                <SelectOptions name="regions" />  */}
                    <select id="games">
                    <option className="filter_option" value="League of Legends">League of Legends</option>
                    <option className="filter_option" value="DOTA 2">DOTA 2</option>
                    <option className="filter_option" value="CSGO">CSGO</option>
                    <option className="filter_option" value="Valorant">Valorant</option>
                    <option className="filter_option" value="Rocket League">Rocket League</option>
                </select>
                
                <select id="regions">
                    <option className="filter_option" value="Middle East">Middle East</option>
                    <option className="filter_option" value="West Europe">West Europe</option>
                    <option className="filter_option" value="East Europe">East Europe</option>
                    <option className="filter_option" value="North America">North America</option>
                    <option className="filter_option" value="South America">South America</option>
                </select>
                <input className="filter_button" type="submit" value="Filter" />
            </form>
            {/* <div className="tournament_img_container"> */}
                <Tournaments />
            {/* </div> */}
            
            <Footer />
        </div>
    );
}

export default Browse;