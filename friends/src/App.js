import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Header from './components/Header';

function App() {
  const [friends, setFriends] = useState([]);
  const [friendForm, setFriendForm] = useState({name: '', age: '', email: ''});
  const baseUrl = 'http://localhost:5000/friends';

  const friendInputChange = target => {
    let newForm = friendForm;
    newForm[target.id] = target.value;
    setFriendForm({...newForm });
  }

  const CreateFriend = async () => {
    const { name, email, age } = friendForm;
    const body = {name, age: parseInt(age), email}
    const req = await Axios.post(baseUrl, body)
    setFriends(req.data)
    setFriendForm({name: '', age: '', email: ''});
  }
  const updateFriend = async id => {
    const { name, email, age } = friendForm;
    const body = {name, age: parseInt(age), email}
    const req = await Axios.put(`${baseUrl}/${id}`, body)
    setFriends(req.data)
    setFriendForm({name: '', age: '', email: ''});
  }

  const editFriend = id => {
    const edFriend = friends.filter(friend => friend.id === id)
    const { name, age, email } = edFriend[0];
    setFriendForm({name, age, email})
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
      <Route path="/" render={rProps => <FriendList {...rProps}
        friends={friends}
        deleteFriend={deleteFriend}
        editFriend={editFriend}
       />} />
      <Route path="/add-friend" render={rProps => <FriendForm {...rProps}
        friendInputChange={friendInputChange}
        createFriend={CreateFriend}
        friendForm={friendForm}
       />} />
      <Route path="/update-friend/:id" render={rProps => <FriendForm {...rProps}
        friendInputChange={friendInputChange}
        friendForm={friendForm}
        updateFriend={updateFriend}
        updateState={true}
       />} 
       />
    </div>
  );
}

export default App;
