import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Age:</strong> {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
