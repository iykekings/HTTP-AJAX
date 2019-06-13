import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Header from './components/Header';

function App() {
  const [friends, setFriends] = useState([]);
  const baseUrl = 'http://localhost:5000/friends';

  const CreateFriend = async newUser => {
    const { name, email, age } = newUser;
    const body = {name, age: parseInt(age), email}
    const req = await Axios.post(baseUrl, body)
    setFriends(req.data)
  }

  const updateFriend = async (id, body) => {
    const req = await Axios.put(`${baseUrl}/${id}`, body)
    setFriends(req.data)
  }

  const deleteFriend = async id => {
    const req  = await Axios.delete(`${baseUrl}/${id}`)
    setFriends(req.data)
  }

  const fetchFriends = async () => {
        try {
          const req = await fetch(baseUrl);
          const friends = await req.json();
          setFriends(friends);
        } catch (err) {
          console.log(err)
        }
  }

  useEffect(() => {
    fetchFriends();
  }, [])

  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={rProps => <FriendList {...rProps}
        friends={friends}
        deleteFriend={deleteFriend}
       />} />
      <Route path="/add-friend" render={rProps => <FriendForm {...rProps}
        createFriend={CreateFriend}
       />} />
      <Route path="/update-friend/:id" render={rProps => <FriendForm {...rProps}
        updateFriend={updateFriend}
       />} 
       />
    </div>
  );
}

export default App;
