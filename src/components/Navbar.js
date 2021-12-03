import { AppBar,Toolbar,CssBaseline,Typography,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return (
        <>
            <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className="logo">
                    Navbar
                </Typography>
                <div className="navlinks">
                    <Link to="/" className="link">
                        <Button>Home</Button>
                    </Link>
                    <Link to="/a" className="link">
                        <Button>A</Button>
                    </Link>
                    <Link to="/b" className="link">
                        <Button>B</Button>
                    </Link>
                    <Link to="/c" className="link">
                        <Button className="bttn">C</Button>
                    </Link>
                </div>
                <div className="navlinks2">
                    <Link to="/b" className="link">
                        <Button>Login</Button>
                    </Link>
                    <Link to="/c" className="link">
                        <Button>SignUp</Button>
                    </Link>
                </div>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;