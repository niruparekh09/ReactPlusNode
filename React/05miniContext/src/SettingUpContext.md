# Steps to Create Context

## 1. React.createContext():

This function is used to create a React context object.
It takes an optional default value as an argument, which serves as the initial value for the context data if no provider is present.
The created context object has two important properties:

- **_Provider:_** A component used to provide a value to the context.
- **_Consumer (rarely used):_** A component that can be used to consume (read) the context value, but it's generally less preferred than useContext.

```js
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
```

## 2. Context:

A context object represents a shared state space within your React application.
It acts as a mechanism to pass data down the component tree without explicitly passing it as props through each level.
Any component within the provider's hierarchy can access the context value.

## 3. Provider:

The Provider component is a React component used to establish the context value for its children.
It wraps the components that need access to the context data.
You supply the desired value to the Provider component using the value prop.

```js
import React from 'react';
import UserContext from './UserContext';

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```
