import React, { useState, useEffect} from 'react'

const FriendForm = props => {

    const [friendForm, setFriendForm] = useState({name: '', age: '', email: ''});
    const { id } = props.match.params;

    useEffect(() => {
        if(id) {
            fetch('http://localhost:5000/friends')
            .then(req => req.json())
            .then(friends => {
                const friendToUpdate = friends.filter(friend => friend.id === parseInt(id))[0]
                setFriendForm({...friendToUpdate})
            })
            .catch(err => console.log(err))
        }
    },[id]);

    const friendInputChange = target => {
        let newForm = friendForm;
        newForm[target.id] = target.value;
        setFriendForm({...newForm });
      }

    const submitForm = (e) => {
        e.preventDefault();
        if(id) {
            props.updateFriend(id, friendForm); 
        } else {
            props.createFriend(friendForm);
        }
        setFriendForm({name: '', age: '', email: ''});
    }


    return <div className="form-bearer">
        <form onSubmit={(e) => submitForm(e)}>
            <input type="text" name="name" id="name" 
            onChange={(e) => friendInputChange(e.target)}
             value={friendForm.name} placeholder="Name"/>

            <input type="text" name="email" id="email" 
            onChange={(e) => friendInputChange(e.target)} 
            value={friendForm.email} placeholder="Email"/>

            <input type="text" name="age" id="age" 
            onChange={(e) => friendInputChange(e.target)}
             value={friendForm.age} placeholder="Age"/>

            <input type="submit" value={!!id 
                ? 'Update Friend' : 'Add Friend'}/>
        </form>
    </div>
}
export default FriendForm;