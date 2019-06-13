import React from 'react';
import { NavLink } from 'react-router-dom';

const Friend = props => {
    return (
        <div className="friend">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <button onClick={(e) => props.deleteFriend(props.id) }>Delete</button>
            <NavLink to={`/update-friend/{props.match.params.id}`} />
            {/* <button onClick={() => props.editFriend(props.id) }>Edit</button> */}
        </div>
    )
}

export default Friend
