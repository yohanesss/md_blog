---
title: Introduction of Facade Pattern in Javascript
date: '2021-09-17'
description: What is a facade pattern in programming, why it is created and what purpose this pattern solve?
heroImage: https://images.unsplash.com/photo-1492724282899-01d3e50e6862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80
photographer: Norbert Levajsics
photographerAccount: levajsics
photoProvider: unsplash
isPublished: true
tags:
  - javascript
  - pattern
---

Today, we will discuss about another one of popular design pattern in programming, the Facade Pattern. 📖

Before we jump into the details of it, let us discuss some examples which will be solved by this particular Pattern.

As the name suggests, *Facade* it means the face of the building. 🏢

The people passing by the street and look at the building doesn't need to know, how is the wiring or the pipes, or other complexities of that building. It hides all the complexities of the building and displays a friendly face.

Other simple analogy that I can think of is a customer service. Anyone can ask the customer service regarding the inquiry, or complaint. The customer didn't need to ask shipping delay issue to the logistic directly, or complaint about the incorrect billing issue to the finance directly. They can just ask the customer service, and the customer service will be addresses this issue for them and give the information needed.

Okay, we got the idea of what is Facade Pattern is about. How can this related to programming?

Let's say our Product Manager told John to create a page to display a listing of the company products. In this case, John first instict is immediately search the npm repository for third party API that allow him to quickly retrieve the data from the database. He is super confident about this third party API he found, and he start create the page with this API, and all goes smoothly for John. 🚗

After a while he also start to use this third page API all over the place, unfortunately for him during the weekend, his PM call John and tell him the application is broken because of a nasty bug, that has been produced by this third party API that John use. Because of the third party API is **tighly coupled within the application**, he spent a whole weekend fixing the bug in application. 🐞

![](https://media0.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif?cid=790b76115f307fb3a0e79c8af9e7d22d48ac4b48a52f2d66&rid=giphy.gif&ct=g)

As we can see in the case above. Tighly coupled between the API that John use within the application is the source of the problem. How can we prevent this to be happening to us? Facade Pattern to the rescue! ✨

Let's take a look at the code below

```js
import React from 'react'
import axios from 'axios'

function ProductPage({ productId }) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    axios
      .get(`product_end_url/${productId}`)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [id])

  return data !== null && <div>{JSON.stringify(data, null, 2)}</div>
}
```

From the code above, we use `axios` library to fetch the product data for our component. This is not a problem for a small application. Now, imagine your application has grown larger and having a multiple, dozens or even hundreds components that are similar. they are fetching and posting data all over the place using `axios` directly. And later on, our team decided to drop `axios` dependency and switch to using `fetch`. Now we are in the same position as John. 🥹

Let's take a look at facade implementation below

```js
// API.js
import axios from 'axios'

export default class API {
  get(url) {
    return axios.get(url)
  }f
  post(url, options) {
    return axios.post(url, options)
  }
}

// DetailPage.js
import React from 'react'
import API from './API'

function ProductPage({ productId }) {
  const [data, setData] = React.useState(null)

  React.ProductPage(() => {
    API.get(`product_end_url/${productId}`)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [id])

  return data !== null && <div>{JSON.stringify(data, null, 2)}</div>
}
```

From the code above, we did some modification in our code. We add an extra layer in our code. We didn't access `axios` directly to fetch data rather than we are calling it using `get()` method, or `post()` for updating data from `API` class. 

The main purpose of API layer in this example is to encapsulate all of the logic for accessing API. So the consumer doesn't need to know the implementation detail of logic from `API` class, they just consume it and it will just work as expected. Let's change the implementation of `API` class to use `fetch`.

```js
// API.js
export default class API {
  get(url) {
    return fetch(url)
  }

  post(url, options) {
    return fetch(url, {
      method: 'POST',
      ...options,
    })
  }
}
```

We have successfully implemented facade pattern in this contrived example. By using facade pattern, our code not tighly coupled anymore. Not only make our code cleaner, modular, but also hide the logic complexities of the exposed method from end consumer which raise the readibility and make our code more easily to maintain.

I hope this brief introduction to facade pattern will give us a new perspective on how we design our code to make us a happy programmer. 🤓