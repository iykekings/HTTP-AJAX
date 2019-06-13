import React from 'react';
import { NavLink } from 'react-router-dom';

const Friend = props => {
    return (
        <div className="friend">
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p className="f-email">{props.email}</p>
            <button onClick={(e) => props.deleteFriend(props.id) }>Delete</button>
            <NavLink to={`/update-friend/${props.id}`} >
                <button>Edit</button>
            </NavLink>
        </div>
    )
}

export default Friend
