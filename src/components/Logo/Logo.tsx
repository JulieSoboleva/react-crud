import { Link } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
    return (
        <Link className="logo" to="/">
            Logo
        </Link>
    );
};

export default Logo;
