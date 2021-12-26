import { AppBar,Toolbar,Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function Navbar() {

    return (
        <>
            <AppBar position="static">
                <Toolbar className="">
                    <Typography variant="h4" className="logo">
                        Internalpha
                    </Typography>
                    <div className="navlinks">
                        <div className="dropdown">
                            <Link to="/alice" className="list-items">Alice</Link>
                            <div className="dropdown-content">
                                <Link to="/alice" className="dropdown-content-list">Alice</Link>
                                <Link to="/alice" className="dropdown-content-list">Alice</Link>
                                <Link to="/alice" className="dropdown-content-list">Alice</Link>
                                <Link to="/alice" className="dropdown-content-list">Alice</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navlinks2">
                        <Link to="/login" className="list-items">Login</Link>
                        <div className="dropdown">
                        <div className="list-items">Register</div>
                            <div className="dropdown-content">
                                <Link to="/registerstudent" className="dropdown-content-list">Register as a Student</Link>
                                <Link to="/registerteacher" className="dropdown-content-list">Register as a Teacher</Link>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;