// import { NavLink } from "react-router-dom";
import { NavItem } from '../NavItem/NavItem';

import './nav.scss';

export const Nav = () => {
    const navItems = [
        // { label: "home", link: "/" },
        { label: "posts", link: "/react-crud" },
        { label: "addPost", link: "/react-crud/add-post" },
        // { label: "login", link: "/login" },
    ];

    // const active = ({ isActive }: { isActive: boolean }) =>
    //     isActive ? "nav__link-active" : "";

    return (
        <nav className="nav">
            <ul className="nav__items">
                {navItems.map(({ label, link }) => (
                    <NavItem key={label} label={label} link={link} />
                ))}
            </ul>
        </nav>
    );
};
