---
title: Introduction of React Context
date: '2021-05-22'
description: Introduction of React Context. Learn how we can solve one of the common problem with React, the "Prop Drilling" 🧹
heroImage: https://images.unsplash.com/photo-1564864041860-d33b31216b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
photographer: mohammad takhsh
photographerAccount: mohammadtkh
photoProvider: unsplash
isPublished: true
tags:
  - javascript
  - react
---

[React Context API](https://reactjs.org/docs/context.html) is a feature that was introduced since React v.16.3, this feature give us as a React Developer a superpower to pass data through our components trees, which can be really useful for many scenarios. ✨

Before we dive in into how to use React Context, let's first we learn on why this feature is created at the first place. React application is usually consists of multiple components with a parent and children relationships. That means, the data from parent component will be passed to the child component using "props".

 > **Unidirectional data flow** is one of main concept of react, in nutshell changing state on a component will never affect its parent or its siblings, only the children will be affected.

This pattern will give us more confident in our code, because our code will be easier to be debugged and less prone to error. However, if there is any data from children component that needed to be shared between components, then the state needed to be [lifted up](https://reactjs.org/docs/lifting-state-up.html) into nearest parent component.

However in a big application this can be get messy very quickly. Imagine we need user token to be passed out to our deep nested component to call some API.

```js
const { useState, useEffect } from 'react';
const { getToken, getData } from './API/auth';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userAuth = async () => {
      const _token = await getToken();
      setToken(_token)
    }
  }, [])

  return <Dashboard token={token} />
}

const Dashboard = ({token}) => {
  return (
    <div>
      <h1>My Dashboard</h1>
      <UserSummary token={token} />
    </div>
  )
}

const UserSummary = ({token}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async (t) => {
      const _userData = await getData(t);
      setUserData(_userData);
    }

    if (token) fetchUserData(token)
  }, [token])

  return(
    {
      !userData ? <h1>Loading...</h1> : <h1>{JSON.stringify(userData, null, 2)}</h1>
    }
  );
}
```

Let's take a look at the contrived code above. `UserSummary` component need a token to fetch user data. However to do that we need token that has been generated from `App` component. We pass token as prop into `Dashboard` and then pass it again into `UserSummary` component.

From the example above we know `Dashboard` component really did not need `token` prop. However because `UserSummary` is the children from `Dashboard` component, therefore we must pass `token` via `Dashboard`. It may be look okay-ish if there are only one or two level of nested component. However in real world scenario, we may need `token` for many components in our app that might need it. Are we going to pass the `token` prop all around the places? This problem is known as **prop drilling** 🛠

## React Context into the rescue

By using React Context, we are able to pass data through the component tree from parent to child components, without having to pass props down manually at each level.

There are four steps on how to using React Context:

- Create context using `createContext()`.

- Wrap the component using context provider from the created context before.

- Set the default value using `value` property on context provider.

- Get the value of context using `useContext` hooks.

Let's convert the example above to using React Context.

```js
const { useState, useEffect, createContext, useContext } from 'react';
const { getToken, getData } from './API/auth';

export const TokenContext = React.createContext();

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userAuth = async () => {
      const _token = await getToken();
      setToken(_token)
    }
  }, [])

  return (
    <TokenContext.Provider value={token}>
      <Dashboard />
    </TokenContext.Provider>
  )
}

const Dashboard = ({token}) => {
  return (
    <div>
      <h1>My Dashboard</h1>
      <UserSummary />
    </div>
  )
}

const UserSummary = ({token}) => {
  const value = React.useContext(TokenContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async (t) => {
      const _userData = await getData(t);
      setUserData(_userData);
    }

    if (token) fetchUserData(token)
  }, [token])

  return(
    {
      !userData ? <h1>Loading...</h1> : <h1>{JSON.stringify(userData, null, 2)}</h1>
    }
  );
}
```

In the example above, we create a new context and store it as `TokenContext` variable. We wrap `App` component using `Provider` from `TokenContext`, and provide the initial value which is in our case is the `token`. Finally using `useContext()` hooks, we get the context value (which is `token`) in our `UserSummary` component.

By using React Context, we make our code ma lot more concise. Which also eliminates the props drilling problem. Aside from React context, there are also another options available like [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/) which is a global state management.

As a rule of thumb, if there are not a lot amount of state that needed to be managed globally, and the state not updated frequently we should use React Context instead of Redux. However if we are managing a large amount of state and updated frequently we might to consider to use Redux.

I hope this short article help you in you journey on learning React 🍻