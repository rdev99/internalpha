import './Footer.css';
import { AppBar,Container,Toolbar,Typography } from '@mui/material';

function Footer() {

    return (
        <>
            <AppBar className="footer" position="static" color="primary">
                <Container>
                    <Toolbar>
                        <div className="container">
                            <div className="intern-places">
                                <h4 className="footer-header">Internships by Places</h4>
                                <a className="footer-anchor" href="https://www.google.com">Internship in India</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Pune</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Banglore</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Noida</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Russia</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Ukraine</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Pakistan</a>
                                <a className="footer-anchor" href="https://www.google.com">Internship in Kathmandu</a>
                            </div>
                            <div className="about-us">
                                <h4 className="footer-header">About Internalpha</h4>
                                <a className="footer-anchor" href="https://www.google.com">About US</a>
                                <a className="footer-anchor" href="https://www.google.com">Our Services</a>
                                <a className="footer-anchor" href="https://www.google.com">Terms and Conditions</a>
                                <a className="footer-anchor" href="https://www.google.com">Privacy</a>
                                <a className="footer-anchor" href="https://www.google.com">Contact US</a>
                            </div>
                        </div>
                    </Toolbar>
                    <div>
                        <hr></hr>
                        <div className="footer-bottom">
                            <div className="icons">
                                <a href="https://www.instagram.com"><i className="icon fa fa-instagram"></i></a>
                                <a href="https://www.instagram.com"><i className="icon fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com"><i className="icon fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com"><i className="icon fa fa-youtube"></i></a>
                                <a href="https://www.instagram.com"><i className="icon fa fa-reddit"></i></a>
                                <a href="https://www.instagram.com"><i className="icon fa fa-linkedin"></i></a>
                            </div>
                            <div className="copyright">
                                © Copyright 2021 Internalpha
                            </div>
                        </div>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}

export default Footer;