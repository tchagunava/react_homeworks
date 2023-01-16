import { useEffect, useState } from 'react';
import './App.css';

const generateUsers = () => {
  return [
    { id: 1, name: "Gio" },
    { id: 2, name: "Tea" },
    { id: 3, name: "Nuca" },
    { id: 4, name: "Joni" },
    { id: 5, name: "Mer" },
    { id: 6, name: "Mao" },
    { id: 7, name: "Eou" },
    { id: 8, name: "Lui" },
    { id: 9, name: "Low" },
    { id: 10, name: "Lea" },
  ];
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      setUsers(generateUsers());
    }, []
  )

  useEffect(
    () => {
      document.title = `${users.length} user left`;
    }, [users]
  );

  const onRemoveUser = () => {
    setUsers((prevUsers) => {
      const index = Math.floor(Math.random() * prevUsers.length);
      const newUsersArray = prevUsers.filter((_, ind) => ind !== index);
      return newUsersArray;
    });
  };
  return (
    <div className='App'>
      <button onClick={onRemoveUser}>remove user</button>
      {users.map(({ id, name }) => (
        <h1 kay={id}>{name}</h1>
      ))}
    </div>
  );
}

export default App;