---
title: Introduction of useState and useEffect
date: '2020-09-14'
description: Introduction of React hooks 🪝 in functional component and it's class component equvalent
heroImage: https://images.unsplash.com/photo-1506123880582-b365334fd375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80
photographer: Efe Kurnaz
unsplashAccount: efekurnaz
isPublished: true
tags:
  - javascript
  - react
---

You are a developer with previous experience using React, and you are comfortable using React class components. You're so comfortable with class components that switching to functional components sounds daunting. How will you manage the situation? How can you access the React component lifecycle?

If this sounds like you, then this guide will help you start transitioning your class components into functional components. React hooks provide the ability to use state and lifecycle functions inside functional components.

We'll cover the two built-in React hooks: `useState` and `useEffect`.

## useState

The main difference between class and functional components is the fact that class components have state whereas functional components have no state. The useState hook lets us add a local state to a functional component. This hook holds the state between re-renders.

Let's start by comparing the class component and functional component.

```js
import React from 'react';

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.setCounter = this.setCounter.bind(this);
  }

  setCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return(
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.setCounter}>Increment</button>
      </div>
    )
  }
}

export default Increment;
```

In code above, we have a stateful component. Since you are already familiar with class components, let's keep this explanation brief.

- A constructor is created at the start of the component and sets the initial state.

- `counter` is the only value in this example and is initially set to `0`.

- To update the state, `this.setState` is called in `setCounter` function.

- The `onClick` event in the button tag calls `setCounter`, allowing the state to be updated.

How we can we achieve the same thing in stateless component?

```js
import React, { useState } from 'react';

const Increment = () => {
  const [counter, setCounter] = useState(0);

  function incrementByOne() {
    setCounter(counter + 1);
  }

  return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={incrementByOne}>Increment</button>
      </div>

  );
}
```

Now let's describe what happens in this stateless component:

- Importing the `useState` hooks.

- Declaring a state variable for the component. We are using [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to get the **getter** and **setter** methods, and the parameter passed in the `useState` hooks is the **initial value** for our state. In this case `counter` is the getter and `setCounter` is the setter and the initial value is `0`.

- To update the state, `setCounter` is called in `incrementByOne` function.

- The onClick event in the button tag calls `setCounter`, allowing the state to be updated.

With this, we finished replicating the state management from class component into functional component. Hooray!

![](https://media2.giphy.com/media/hEIuLmpW9DmGA/200w.webp?cid=ecf05e479s6el8ohwsda2r5eeglab95xx8i8jymh2ywoeppg&rid=200w.webp&ct=g)

## useEffect

The `useEffect` hook allows us to implement lifecycle methods to tell the component to perform an *side effect* after rendering. The different types of effects are not limited like changing the background image or document title, adding animation or music, data retrieval, and subscriptions.