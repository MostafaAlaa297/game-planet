import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Organize() {
    return (
        <div>
            <Nav />
            <div className="organize_container">

                <form id="organize_form" action="post">

                    <div className="form_upper_arrow"></div>

                    <div className="first_col">
                        
                        <div className="form_group">
                            <label id="name_label" for="name">Tournament Name</label>
                            <input type="text" className="field" id="name" name="name" required/>
                        </div>

                        <div className="form_group">
                            <label id="date_label" for="date">Start Date</label>
                            <input type="date" className="field" id="date" name="date" required/>
                        </div>
                        
                        <div className="form_group">
                            <label id="time_label" for="time">Start Time</label>
                            <input type="time" className="field" id="time" name="time" required/>
                        </div>

                        <div className="form_group">
                            <label id="players_label" for="players" min="6">Number of Players</label>
                            <input type="number" className="field" id="players" name="players"/>
                        </div>

                        <div className="form_group">
                            <label id="teams_label" for="teams" min="6">Number of Teams</label>
                            <input type="number" className="field" id="teams" name="teams"/>
                        </div>
                        <div className="form_group">
                           <label id="logo_label" for="teams" min="6">Add your logo</label>
                            <input type="file" id="img" name="img" accept="image/*"/>
                        </div>
                    </div>

                    <div className="second_col">

                        <div className="form_group">
                        <label id="discord_label" for="url">Enter your discord channel URL:</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
                        </div>

                        <div className="form_group">
                        <label id="fb_label" for="url">Enter your Facebook page URL:</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
                        </div>

                        <div className="form_group">
                        <label id="twitter_label" for="url">Enter your page Twitter URL:</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
                        </div>

                        <div className="form_group">
                        <label id="twitch_label" for="url">Enter your Twitch channel URL:</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
                        </div>

                        <div className="form_lower_arrow"></div>
                    </div>
                    
                    <div className="form_group">
                        <button type="button" id="button" className="submit_button">Submit</button>
                    </div>
                    
                    {/* <div className="form_group">
                        <button type="submit" id="submit" className="submit_button">Submit</button>
                    </div> */}
                
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Organize;