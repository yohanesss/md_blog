---
title: Lifecycle in React Component
date: '2020-10-01'
description: Learn about lifecycle in React component.
heroImage: https://images.unsplash.com/photo-1574121007661-a3344b1834c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
photographer: Laura Gilchrist
unsplashAccount: lauragilchristedu
isPublished: true
tags:
  - javascript
---

Everything in React is made up of components or parts of components and every components follow a certain lifecycle, almost like the lifecycle of any living thing on earth 🌎. They are born, grow, and eventually die.

The phase when they are born is called **mount**. When they are grow is called **update**. The last phase of death is called **unmount**.

This whole process is called the **Component Lifecycle**. For each of these phases, React renders certain built-in methods called lifecycle methods that control the behavior of components.

I will explain in following section about each methods that available for each lifecycle in more detail.


# Mounting Lifecycle Methods

## 1. `constructor()`

`constructor()` is the very first method called as the component is “brought to life.” This method is used for two purposes:

- To initialize the local state of a component

- To bind an event handling method to an instance

Here is an example of `constructor()` method in action:

```js
constructor(props) {
  super(props);
  this.state = { fruit: 'Apple 🍎' }
  this.eatFruit = this.eatFruit.bind(this);
}
```

Note that, `constructor()` is the first method invoked before the component is mounted into the DOM. You should not introduce any side effect in this method.

## 2.`static getDerivedFromProps()`

`getDerivedStateFromProps()` is a new React lifecycle method as of [React 17](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) and designed to replace `componentWillReceiveProps()`.

The purpose of this function is to make sure that the state and props are in sync for when it is required.

`getDerivedStateFromProps()` lifecycle runs after the constructor method and before the `componentDidMount()` lifecycle run. This function accepts two paramenters `props` and `state`. We have to return an object to update state or null to indicate that nothing has changed.

To get better understanding of how `getDerivedStateFromProps()` works, let see the following code:

```js
import React from 'react';

class FavFood extends React.Component {
  constructor() {
    super(props);
    this.state = {
      favFood: 'Banana 🍌';
    }
  }

  render() {
    return(
      <h2>My Favorite Food is {this.state.favFood}</h2>
    );
  }
}
```

When the component mount, we will see `My Favorite Food is Banana 🍌` is showed up in the browser. How can we change our state from `Banana 🍌` into `Apple 🍎` before `render()`? Actually, we can do it via `getDerivedStateFromProps()`.

```js
import React from 'react';

class FavFood extends React.Component {
  constructor() {
    super(props);
    this.state = {
      favFood: 'Banana 🍌';
    }
  }

  // Not Recommended. For explaining purpose only.
  static getDerivedStateFromProps(props, state) {
    return {
      favFood: 'Apple 🍎'
    }
  }

  render() {
    return(
      <h2>My Favorite Food is {this.state.favFood}</h2>
    );
  }
}
```

When the component mount, we will see `My Favorite Food is Apple 🍎` is showed up in the browser rather than `Banana 🍌`. How can this works? By returning an object, `getDerivedStateFromProps()` can utilize its data and doing update for `favFood` before `render()` method is called to render the DOM. Noted that `getDerivedStateFromProps()` is takes 2 argument, the first argument is `props` and the second argument is `state`.

This short example is contrived and not really representative of the way you’d use the static `getDerivedStateFromProps()`. But it’s helpful for understanding the basics. However, just because you can update state via `getDerivedStateFromProps()` it doesn’t mean you should. There are specific use cases on when we should use `getDerivedStateFromProps()`. If you use it in the wrong context, you’ll be solving a problem with the wrong tool 🔨. 

When should we use the static `getDerivedStateFromProps()`? We must know why `getDerivedStateFromProps()` is created in first place. There are some cases where the component is needed update the internal state in response to a prop change. Component state in this manner is referred to as [derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state).



React supports four mounting lifecycle methods for component classes: 

- `constructor()`

- `static getDerivedStateFromProps()`

- `render()`

- `componentDidMount()`

After the component

- **Mounting**

- **Updating**

- **Unmounting**
