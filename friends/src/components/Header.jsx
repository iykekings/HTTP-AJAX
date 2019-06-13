import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div className="header">
        <NavLink to='/' activeClassName="header-active">Friends</NavLink>
        <NavLink to='/add-friend' activeClassName="header-active">Add New Friend</NavLink>
    </div>
}

export default Header