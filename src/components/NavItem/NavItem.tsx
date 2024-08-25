import { NavLink } from 'react-router-dom';
export interface INavItemProps {
    label: string;
    link: string;
}

export const NavItem = ({ label, link }: INavItemProps) => {
    return (
        <li className='nav__item'>
            <NavLink to={link}>{label.toUpperCase()}</NavLink>
        </li>
    );
};
