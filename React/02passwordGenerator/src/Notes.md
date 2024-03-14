**1. useState**:
The `useState` hook is used for managing state in functional components. It allows you to add state to functional components, which were previously only available in class components. The `useState` hook returns an array with two elements: the current state value and a function to update that state value.

Example:
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**2. useEffect**:
The `useEffect` hook is used for performing side effects in functional components. It allows you to handle lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in a single API. The `useEffect` hook takes two arguments: a function to run after every render (or optionally, only when certain values have changed), and an optional array of values to watch for changes.

Example:
```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up function
  }, [count]);

  return <h1>{count}</h1>;
}
```

**3. useRef**:
The `useRef` hook is used for creating a mutable reference that can persist data across renders. It returns a mutable object with a `current` property that can hold any value. This is useful for accessing DOM elements, storing mutable values, or creating instances of objects that should persist across renders.

Example:
```javascript
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

**4. useCallback**:
The `useCallback` hook is used for optimizing performance by memoizing a callback function. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This can be useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

Example:
```javascript
import React, { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
});
```
In this example, the `handleClick` function is memoized using `useCallback`, so it will only be re-created if the `count` dependency changes. This prevents unnecessary re-renders of the memoized `Child` component when `Parent` re-renders with the same `handleClick` function reference.

These hooks provide powerful techniques for managing state, side effects, mutable references, and optimizing performance in React functional components.