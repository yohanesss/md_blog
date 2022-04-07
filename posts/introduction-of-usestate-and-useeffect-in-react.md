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

The `useEffect` hook allows us to implement lifecycle methods to tell the component to perform an *side effect* after rendering. The different types of effects are not limited like changing document title, adding animation or music, data retrieval, and subscriptions. I have write the article about [lifecyle method](/blog/lifecycle-in-react-component) if you need some refresher.

As mentioned earlier, the `useEffect` hook allows us to use React's lifecycle methods in stateless components. We'll look at mirroring the effects of `componentDidMount` and `componentDidUpdate`.

```js
import React from 'react';

class FavoriteVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: 'Walk 🏃'
    };

    componentDidMount() {
      console.log(`Component mounted | ${this.state.vehicle}`);
    }

    componentDidUpdate() {
      console.log(`Component updated | ${this.state.vehicle}`);
    }

    changeToCar() {
      this.setState({ vehicle: 'Car 🚗' })
    }

    changeToRocket() {
      this.setState({ vehicle: 'Rocket 🚀' })
    }

    render() {
      return(
        <div>
          <h1>My Fav Vehicle: {this.state.vehicle}</h1>
          <button onClick={changeToCar}>Change to Car 🚗</button>
          <button onClick={changeToRocket}>Change to Rocket 🚀</button>
        </div>
      );
    }
  }
}
```

`componentDidMount` will be called as soon as the component is mounted. In our example, when `FavoriteVehicle` is rendered, the string `"Component mounted | Walk 🏃"` will appear in console.

When you click the `"Change to Car 🚗"` button, `componentDidUpdate` is called (because the state has changed), the console will print `"Component updated | Car 🚗"`. If you click the `"Change to Rocket 🚀"` button `componentDidUpdate` will be called again. `componentDidUpdate` will be executed every time the component is re-rendered.

How we can achieve the same thing in functional component? Let's see the code below.

```js
import React, { useState, useEffect } from 'react';

const FavoriteVehicle = () => {
  const [vehicle, setVehicle] = useState('Walk 🏃');

  useEffect(() => {
      console.log(`Component mounted | ${vehicle}`);
  }, []);

  useEffect(() => {
    console.log(`Component updated | ${vehicle}`);
  }, [vehicle])

  return(
    <div>
      <h1>My Fav Vehicle: {vehicle}</h1>
      <button onClick={() => setVehicle('Car 🚗')}>Change to Car 🚗</button>
      <button onClick={() => setVehicle('Rocket 🚀')}>Change to Rocket 🚀</button>
    </div>
  );
}
```

Let's describe what happened here:

- Importing `useState` and `useEffect` hooks

- We called `useEffect` in our functional component. `useEffect` accept two parameters, the first parameter is **the effect callback**, and the second parameter is **dependency array**. Notice that we called it twice in this example. When we called it the first time, we pass empty array, and on the second time we pass `vehicle` as our dependency. There is a subtle difference in both of these `useEffect` invocations.

- If we pass empty array to our `useEffect` invocation **it will only run once**, therefore it will behave same as `componentDidMount`. Otherwise when we pass `vehicle` on dependency list, our component will **re-render every time** if the value of `vehicle` is changed, it will behave same as `componentDidUpdate`.

- When the component is rendered we will see both `"Component mounted | Walk 🏃"` and `"Component updated | Walk 🏃"` is logged in console. And when we tried to click `"Change to Car 🚗"`, we will see `"Component updated | Car 🚗"` is logged in console. This happen because we pass `vehicle` in our dependency array in `useEffect` hook. Note that `"Component mounted | Walk 🏃"` is only logged once this happen because we didn't pass anything in our dependency array.

Another thing to note is, if we only pass one parameter (the effect callback) into `useEffect`, the effect will be **always executed** after every render. There will be a nasty bug in your code if you're trying to set the state in `useEffect` without putting the state in the dependency array. Let's say maybe you're fetching userData from API and tried to save the returned data into your state. You will have an infinite re-render of your component! 🧨 *ps: When I first learn about useEffect this happen to me. I tell you so hopefully you are not suffer the same thing that I experienced. LOL'*

The last thing that I want to mentioned is you also can mimic `componentWillUnmount` behavior in `useEffect` by having a return function in your effect callback. `useEffect` will invoke this function when unmounting the component. This is useful when you want to unsubscribe to some listener API or to cleaning up async effect in your component.

That's it for the introduction of `useState` and `useEffect`. I hope this article will help you in your journey to understanding react hooks 🍻