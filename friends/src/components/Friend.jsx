import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    return (
        <div className="friend">
            <p>{props.name}</p>
            <p className="f-age">{props.age}</p>
            <p className="f-email">{props.email}</p>
            <div className="f-btns">
                <button onClick={(e) => props.deleteFriend(props.id) }>Delete</button>
                <Link to={`/update-friend/${props.id}`} >
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Friend
