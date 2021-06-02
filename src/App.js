import React, {useState} from 'react';

import UserList from './components/UserList/UserList';
import NewUser from './components/NewUser/NewUser';

const users = [
    {
      name: 'sahana',
      age: 27,
      id: 0
    },
    {
      name: 'Akash',
      age: 29,
      id: 1
    },

    {
      name: 'xxx',
      age: 1,
      id: 3
    },

  ]

function App() {

  const [ userList, setUserList] = useState(users);

  const getUserHandler = event => {
    setUserList( prevState => {
      return [...prevState, event];
    })
  }

  return (
    <div>
      <NewUser onSaveHandler={getUserHandler}/>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
