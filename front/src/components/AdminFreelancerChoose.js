import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../img/LOGO_CLASSIQUE_FOND TRANSPARENT_400X400.png';
import { Link } from 'react-router-dom';

const AdminUserChoose = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/neoworker">Utilisateur Freelance</NavLink>
                </NavItem>
                <NavItem className="burgerNav">
                    <NavLink tag={Link} to="/admin">Utilisateur Administrateur</NavLink>
                </NavItem>
            </Nav>
            <img src={logo} alt='logo' />
        </div>
    );
}
export default AdminUserChoose;
