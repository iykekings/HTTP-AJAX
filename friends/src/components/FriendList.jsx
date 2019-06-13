import React from 'react'
import Friend from './Friend'

const FriendList = ({ friends, deleteFriend, editFriend }) => {
    return (
        <div className="friend-con">
            {friends.map( friend => <Friend 
            key={friend.id} 
            {...friend} 
            deleteFriend={deleteFriend}
            />)}
        </div>
    )
}

export default FriendList
