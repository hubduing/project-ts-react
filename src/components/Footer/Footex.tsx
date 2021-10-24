import React from "react";
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="wrapper footer__container">
                <div className="footer__box">
                    <a href="#"><h3 className="footer__title">Trevland</h3></a>
                    <a href="#!" className="footer__text">Contact us</a>
                    <a href="#!" className="footer__text">@shovasatkhira88.com</a>
                    <div className="socials">
                        <a href="#!"><i className="fab fa-facebook-square"></i></a>
                        <a href="#!"><i className="fab fa-instagram"></i></a>
                        <a href="#!"><i className="fab fa-twitter-square"></i></a>
                        <a href="#!"><i className="fab fa-google-plus"></i></a>
                    </div>
                </div>
                <div className="footer__box">
                    <a href="#!" className="footer__text">Services</a>
                    <a href="#!" className="footer__text">About</a>
                    <a href="#!" className="footer__text">Our story</a>
                    <a href="#!" className="footer__text">Brnefits</a>
                    <a href="#!" className="footer__text">Branding</a>
                </div>
                <div className="footer__box">
                    <a href="#!" className="footer__text">Legal</a>
                    <a href="#!" className="footer__text">Terms & Conditions</a>
                    <a href="#!" className="footer__text">Privecy Policy</a>
                    <a href="#!" className="footer__text">Terms of use</a>
                </div>
            </div>
        </div>       
    )
};

export default Footer;