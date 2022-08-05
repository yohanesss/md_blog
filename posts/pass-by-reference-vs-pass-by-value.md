---
title: Pass By Reference Vs Pass By Value
date: '2022-01-04'
description: Understanding Pass by Reference and by Value is one of the most important concept in Javascript. Let's dive in. 🤿
heroImage: https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1545&q=80
photographer: malith d karunarathne
photographerAccount: malithdk
photoProvider: unsplash
isPublished: true
tags:
  - javascript
---

Hi Devs! Today we will discuss one of the most fundamental concept in Javascript "Pass by Value" and "Pass by Reference". This concept is so important, even this question is often pop up in job interview. Why is that? By understanding how this works, it will help us to be a better programmer that can understand the flow of data in the application.

Before we can dive in into the explanation. We must know that, in Javascript data types are classified into two categories: *primitive* and *non-primitive*.

Here is a list primitive data types in Javascript:
- `string` -- an array of character

- `number` -- integer, floats, etc...

- `bigint` -- in case you need integer values larger than the range supported by the `Number`

- `boolean` -- true or false

- `null` -- empty value

- `symbols` -- an unique value or often used as unique identifier that is not equal to any other value

- `undefined` -- declared variable but the value is still not assigned.

Meanwhile all objects, arrays, and functions fall under the category of non-primitive data types.

Okay, we got this. Let's jump into the explanation!

![](https://media4.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif?cid=ecf05e47tzhwz2l8l4dxy9rdt1f1z92m8poi670lhhqhxvpv&rid=giphy.gif&ct=g)

# Pass by Reference

Let's take a look at the code below to understand what is pass by reference is

```js
let john = {
  name: 'John Doe',
  gender: 'male',
  score: 95
};

let JohnDupe = john;
console.log(JohnDupe); // {name: 'John Doe', gender: 'male', score: 95}
console.log(john); // {name: 'John Doe', gender: 'male', score: 95}
```

Okay, we have create a new variable `JohnDupe` and assign the value from `John`. What happen next if we modify the score of `JohnDupe`?

```js
johnDupe.score = 50;

console.log(JohnDupe); // {name: 'John Doe', gender: 'male', score: 50}
console.log(john); // {name: 'John Doe', gender: 'male', score: 50}
```

Notice that the value score of `John` is also changed! What actually happened? When we create `John` (new object), we are store the value in the memory within some address. And when we assign the value from `John` to `johnDupe`, actually instead of creating a copy of `John`, `JohnDupe` value is **referencing** the value (the address) of `John` in the memory.

To fix the problem above, we need to actually create a copy of `John` and assign it to a new variable and then we can change the score without affecting the original `John`.

```js
let john = {
  name: 'John Doe',
  gender: 'male',
  score: 95
};

let anotherJohn = {...john}

anotherJohn.score = 50;

console.log(john); // {name: 'John Doe', gender: 'male', score: 95}
console.log(anotherJohn); // {name: 'John Doe', gender: 'male', score: 50}
```

In the code above, we have copied `john` using spread operator and then assign it into `anotherJohn`. By creating new object, `anotherJohn` actually store the copied object in the memory with different address from `john`. `anotherJohn` is not referencing `john` anymore like before, they are completely a different entities. To prove that, take a look at the code below

```js
let person = {
  name: 'Nicola Tesla',
  gender: 'male',
};

let personDupe = person;

let anotherPerson = {
  name: 'Nicola Tesla',
  gender: 'male',
};

console.log(person === personDupe); // true
console.log(person === anotherPerson); // false
```

In the example above, we tried to compare equal `person === personDupe` which will be print `true` because `personDupe` is pointing the address from `person`. However when we tried to compare equal `person === anotherPerson` this will be print `false` because they are not the same object even if they are have the same properties and values.

This behavior is also same with `Array`.

```js
let fruits = ['apple 🍎', 'strawberry 🍓', 'banana 🍌'];

let fruitsDupe = fruits;

let anotherFruits = ['apple 🍎', 'strawberry 🍓', 'banana 🍌'];

console.log(fruits === fruitsDupe); // true
console.log(fruits === anotherFruits); // false
```

I have an analogy for having us easier to understanding "pass by reference" by assuming it as a google sheet / google docs.

Let's say a group of student is given an assignment by a teacher to put their own opinion about global warming. 🌎 The teacher want the format of the assignment to be in a single file.

John as the class president take the initiative to create a google docs so the student could collaborate easily. John then share the link with his classmates. Mary is the first student that make a change into the docs and add a bunch of paragraph of her idea about global warming. Later that night Suzie opened the google docs and add her own opinion, followed by Andy and so on. Finally after all the student is finished add their own opinion, John shared the google docs to the teacher. All is good and the class got an "A" for the assignment ✨

From the case above, no matter how many times google docs is modified by students in the end it still be only modifiying one file (master file).

So far so good! We are know what is exactly pass by reference is. ✨

![](https://media4.giphy.com/media/NaboQwhxK3gMU/giphy.gif?cid=ecf05e47r74r6mqcuymy2un7la55syohp2v3co6d0e9a5xyh&rid=giphy.gif&ct=g)

# Pass by Value

If you are already understanding pass by reference, you already understanding pass by value is. Primitive values such as numbers or strings will actually create a copy.

```js
const num = 10

function passByValue(val) {
  return val += 1
}


console.log('[passByValue]:', passByValue(num)) // [passByValue]: 11
console.log('[num]:', num) // [num:] 10
```

In the code above, we create a variable `num` with the value of 10. Also we create a function `passByValue` which take a value as parameter and add it by 1. If we were trying to run the code above, `passByValue` will return 11, however `num` variable is still 10. the original value of `num` is **not changed at all**.

---

I hope this short article will help you to understanding the concept of pass by reference and pass by value. The main difference between pass by value and pass by reference is, pass by value will **create a new space in memory and make a copy of a value**. Pass by reference however instead of making a copy, **the value stored in memory gets referenced**.
