import { Logo } from '../Logo';
import { Nav } from '../Nav';

import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
};
