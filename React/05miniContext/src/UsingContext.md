# Using context to Set and Get data accross multiple pages

### Login.jsx:

**Setting Context:**

- Retrieves the setUser function from the UserContext using useContext.
- On form submission (handleSubmit), it calls setUser with the collected username and password, updating the user data within the context.

```js
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      /> <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
```

### Profile.jsx

**Getting Context**

- Uses useContext to retrieve the user object from the UserContext.
- Conditionally renders content based on whether a user is logged in:

  - If user is not found (user is not logged in), it asks the user to log in.
  - If user exists, it displays a welcome message with the user's username.

```js
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
```

### App.jsx

The UserContext.Provider component is wrapped around these components at a higher level in the application, providing the context to its children.
```js
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
```