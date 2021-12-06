import { AppBar,Toolbar,Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return (
        <>
            <AppBar position="static">
            <Toolbar className="">
                <Typography variant="h4" className="logo">
                    Navbar
                </Typography>
                <div className="navlinks">
                    <ul>
                        <li className="list-items">Alice</li>
                        <li className="list-items">B</li>
                    </ul>
                </div>
                <div className="navlinks2">
                    <Link to="/b" className="link">
                        <Button className="bttn">Login</Button>
                    </Link>
                    <Link to="/c" className="link">
                        <Button className="bttn">Register</Button>
                    </Link>
                </div>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;