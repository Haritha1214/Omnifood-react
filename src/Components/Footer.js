import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div>
            <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Press</a></li>
                        <li><a href="/">iOS App</a></li>
                        <li><a href="/">Android App</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><a href="/"><FacebookIcon className="ion-social-facebook"/></a></li>
                        <li><a href="/"><TwitterIcon className="ion-social-twitter"/></a></li>
                        <li><a href="/"><InstagramIcon className="ion-social-instagram"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>
                    Copyright &copy; 2015 by Omnifood. All rights reserved.
                </p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;