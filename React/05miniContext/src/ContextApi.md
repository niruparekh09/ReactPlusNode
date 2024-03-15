# Prop Drilling:

***What it is:*** Prop drilling is a common practice in React where data is passed down through multiple levels of components in a hierarchy by explicitly passing it as props from parent to child components.
Drawbacks:  
***Code complexity:*** As the application grows, managing data flow through props becomes cumbersome and error-prone.
Reduced maintainability: Changes to shared data require modifying multiple components, making updates more difficult.  
***Tight coupling:*** Components become tightly coupled to the structure of parent components, hindering reusability.

# Context API

***What it is:*** The Context API is a built-in React feature that allows you to share data across components without explicitly passing it down through props. It provides a way to establish a global state management solution within your React application.  
***How it works:***
You create a React context using React.createContext().
You wrap your application's root component with a Context.Provider component, supplying the value you want to share (usually an object containing state or data).
Any child component within the provider's tree can access the shared data using the useContext hook.
Example (Using Context API to Avoid Prop Drilling):

## 1. Create the Context:
```javascript
import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}, // Initial value for function
});

export default ThemeContext;
```

This code defines a ThemeContext with initial values for the theme ('light') and a placeholder function for toggling the theme (toggleTheme).

## 2. Provide the Context:
```js
import React from 'react';
import ThemeContext from './ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* App content */}
      <Header />
      <MainContent />
      {/* ... other components */}
    </ThemeContext.Provider>
  );
};

export default App;
```

The App component creates the context provider, wrapping its child components with ThemeContext.Provider. It manages the theme state and provides a toggleTheme function to update it.

## 3. Access the Context:
```js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
```
The Header component retrieves the theme and toggleTheme functions directly from the context using useContext. It uses the theme value to style the header and can trigger the theme change using toggleTheme. Similarly, other components can access the shared data.

### [Refer This Article For More Information](https://www.freecodecamp.org/news/context-api-in-react/)