import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <p className="sitemap">Site Map</p>
            <div className="footer__links">
                <Link to="/">Home</Link>
                <Link to="/organize">Organize</Link>
                <Link to="/browse" className="browse_link">Browse</Link>
                <Link to="/support">Support</Link>
                <Link to="/newsletter" className="newsletter">Newsletter</Link>
            </div>
            <p className="followus">Follow us on</p>
            <div className="socialIcons">
                <FacebookIcon className="socialIcon fb" aria-label="Facebook" />
                <InstagramIcon className="socialIcon insta" aria-label="Instagram" />
                <YouTubeIcon className="socialIcon youtube" aria-label="YouTube" />
                <TwitterIcon className="socialIcon twitter" aria-label="Twitter" />
            </div>
            <p className="copy">&copy; Copyright 2021</p>
        </div>
    );
}

export default Footer;
