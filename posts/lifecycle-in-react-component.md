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

We can see on the diagram below all of React lifecycle methods associated with the mounting, updating, umounting of the component. *(diagram credit: [dan abramov](https://twitter.com/dan_abramov/status/981712092611989509?lang=en))*

###### ![](https://pbs.twimg.com/media/DZ-97vzW4AAbcZj?format=jpg&name=large)

I will explain in following section about each methods that available for each lifecycle in more detail.

# Mounting Lifecycle Methods

The mounting phase is a phase whre is the component is created and inserted into the DOM.
## 1. `constructor()`

`constructor()` is the very first method called as the component is created. This method is used for two purposes:

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

Note that, `constructor()` is the first method invoked before the component is mounted into the DOM. We should not introduce any side effect in this method.

## 2.`getDerivedFromProps()`

`getDerivedStateFromProps()` is a new React lifecycle method as of [React 17](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) and designed to replace `componentWillReceiveProps()`.

The purpose of this function is to make sure that the state and props are in sync for when it is required.

`getDerivedStateFromProps()` lifecycle runs after the constructor method and before the `componentDidMount()` lifecycle run. This function accepts two paramenters `props` and `state`. We have to return an object to update state or null to indicate that nothing has changed.

To get better understanding of how `getDerivedStateFromProps()` works, let see the following code:

```js
import React from 'react';

class FavFruit extends React.Component {
  constructor() {
    super(props);
    this.state = {
      favFruit: 'Banana 🍌';
    }
  }

  render() {
    return(
      <h2>My Favorite Fruit is {this.state.favFruit}</h2>
    );
  }
}
```

When the component mount, we will see `My Favorite Fruit is Banana 🍌` is showed up in the browser. How can we change our state from `Banana 🍌` into `Apple 🍎` before `render()`? Actually, we can do it via `getDerivedStateFromProps()`.

```js
import React from 'react';

class FavFruit extends React.Component {
  constructor() {
    super(props);
    this.state = {
      favFruit: 'Banana 🍌';
    }
  }

  // Not Recommended. For explaining purpose only.
  static getDerivedStateFromProps(props, state) {
    return {
      favFruit: 'Apple 🍎'
    }
  }

  render() {
    return(
      <h2>My Favorite Fruit is {this.state.favFruit}</h2>
    );
  }
}
```

When the component mount, we will see `My Favorite Fruit is Apple 🍎` is showed up in the browser rather than `Banana 🍌`. How can this works? By returning an object, `getDerivedStateFromProps()` can utilize its data and doing update for `favFruit` before `render()` method is called to render the DOM. Noted that `getDerivedStateFromProps()` is takes 2 argument, the first argument is `props` and the second argument is `state`.

This short example is contrived and not really representative of the way how to use `getDerivedStateFromProps()`. But it’s helpful for understanding the basics. However, just because we can update state via `getDerivedStateFromProps()` it doesn’t mean we should. There are specific use cases on when we should use `getDerivedStateFromProps()`. If we use it in the wrong context, we’ll be solving a problem with the wrong tool 🔨. 

When should we use the `getDerivedStateFromProps()`? We must know why this method is created in first place. There are some cases where the component is needed update the internal state in response to a prop change. Component state in this manner is referred to as [derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state).

## 3.`render()`

`render()` method is called after `getDerivedStateFromProps()` is called.

```js
import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World! 🌎</h1>
  }
}
```

What we return in `render()` will be rendered into the DOM. In the example above we are returning `JSX`. But we can also return an `array of JSX` `string`, `number`, or if we don’t want to render anything, we could return a `boolean` or `null`

```js
import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return [
      <div key='1'>"Hello World! 🌎"</div>,
      <div key='2'>"Hello World! 🌎"</div>]
  }
}
```

Note that in example above we add `key` property in `jsx`. It is used by React to identify and keep track for which items in the list are changed, updated, or deleted.

## 4.`componentDidMount()`

After `render()` is called (The component is mounted into the DOM), `componentDidMount()` will be invoked. This method is the place when you should do a **side effect** thing. Like make a subscription to an API, data fetching, or maybe make a change into the DOM.

```js
import React from 'react';

class ChangeDocTitle extends React.Component() {
  componentDidMount() {
    document.title = 'Hello World 🌎';
  }

  render() {
    return<h1>This component will change the title of your current tab</h1>
  }
}

```

# Updating Lifecycle Methods



React supports four mounting lifecycle methods for component classes:

- `constructor()`

- `getDerivedStateFromProps()`

- `render()`

- `componentDidMount()`

After the component

- **Mounting**

- **Updating**

- **Unmounting**
