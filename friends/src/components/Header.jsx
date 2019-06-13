import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div classname="header">
        <NavLink to='/' activeClassName="header-active"></NavLink>
        <NavLink to='/add-friend' activeClassName="header-active"></NavLink>
    </div>
}

export default Header