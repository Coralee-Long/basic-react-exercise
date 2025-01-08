import logo from '../assets/images/logoipsum-329.svg';
import { Link, useLocation } from "react-router-dom";


export const Header = () => {
    const location = useLocation(); // Get the current route

    return (
        <header>
            <Link to="/" className="header-logo">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="header-text">
                {location.pathname !== "/profile" && ( // Hide "About Me" on /profile
                    <Link to="/profile" className="header-title">
                        About Me
                    </Link>
                )}
            </div>
        </header>
    );
};