---
title: Practical Use of Builder Pattern in Javascript
date: '2021-04-23'
description: What is a build pattern in programming, why it is created and what purpose this pattern solve?
heroImage: https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
photographer: Ralph (Ravi) Kayden
photographerAccount: ralphkayden
photoProvider: unsplash
isPublished: true
tags:
  - javascript
  - pattern
---

Today, we will discuss about one of popular design pattern in programming, the Builder Pattern.

Before we jump into the explanation, let's take a look at the code below

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const tonyStark = new User('Tony', 'Stark')
```

From the code above, we have a `User` class, and we create `User` object and then save it in a variable `tonyStark`. There is nothing wrong with this approach because we only have an object with two properties. However, what if we create an object with many properties that needed to be provided on object creation process?

```js
class User {
  constructor(firstName, middleName, lastName, suffix, phone, email, isActive, lastSeen) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.suffix = suffix;
    this.phone = phone;
    this.email = email;
    this.isActive = isActive;
    this.lastSeen = lastSee;
  }
}

const tonyStark = new User('Tony', 'Mc', 'Stark', 'Mr', '+620382931232', 'tonystark@tonystark.com', true, '01-01-2021')

const johnDoe = new User('John', 'Mc', 'Doe', 'Mr', '+623123232323', 'johndoe@johndoe.com', true, '02-01-2021')
```

As you can see in the code above, the process of instantiating an object becomes very tedious and prone to error. We need to be careful with the ordering of the parameter we provide, if we are provide incorrect ordering this can become a source of bug in the application. We are human, and human are tend to make mistake. 🐞

That is why the Builder pattern is created. Builder pattern is a design pattern that aims to provide a flexible solution to various object creation problems by simplifying the construction of a complex object from its representation.

```js
class UserBuilder {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  setSuffix(suffix) {
    this.suffix = suffix;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setIsActive(isActive) {
    this.isActive = isActive;
    return this;
  }

  setLastSeen(lastSeen) {
    this.lastSeen = lastSeen;
    return this;
  }

  build() {
    if (!('firstName' in this)) {
      throw new Error('First Name is missing')
    }
    if (!('lastName' in this)) {
      throw new Error('Last Name is missing')
    }
    if (!('phone' in this)) {
      throw new Error('Phone is missing')
    }
    if (!('email' in this)) {
      throw new Error('Email is missing')
    }
    if (!('isActive' in this)) {
      throw new Error('isActive is missing')
    }
    if (!('lastSeen' in this)) {
      throw new Error('lastSeen is missing')
    }
    return new User(this.firstName, this.middleName, this.lastName, this.suffix, this.phone, this.email, this.isActive, this.lastSeen)
  }
}
const tonyStark = new UserBuilder('Tony', null, 'Stark')
  .setSuffix('Mr')
  .setPhone('620382931232')
  .setEmail('tonystark@tonystark.com')
  .setIsActive(true)
  .setLastSeen('01-01-2021')
  .build();

const johnDoe = new UserBuilder('John', 'Mc', 'Stark')
  .setPhone('623123232323')
  .setEmail('johndoe@tonystarkjohndoe.com')
  .setIsActive(true)
  .setLastSeen('02-01-2021')
  .build();
```

By utilizing builder pattern, now we can clearly see what is happening when creating User instances. This results in code that is easy to write and very easy to read and understand. We simplified our paramater by only providing `firstName`, `middleName`, and `lastName`. This not only makes it easier to understand, but also minimalize a human error when instatiating the object. We even add error handlers within our builder, we can specify which parameter that is required or optional. We create the object by chaining the setter method and finally call the `build()` method to finish create an object.

I hope this short article help you in understanding the builder pattern, and when to use it.✨