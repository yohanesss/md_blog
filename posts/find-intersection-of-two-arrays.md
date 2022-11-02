---
title: Find Intersection of Two Arrays
date: '2022-09-03'
description: In this article we will discuss how to find intersection of two arrays.
heroImage: https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80
photographer: Sean Oulashin
photographerAccount: oulashin
photoProvider: unsplash
isPublished: true
tags:
  - javascript
  - leetcode
  - algorithm
---

Hey Devs 👨🏼‍💻! Today we will discuss about one problem that often mentioned in a interview, how to find intersection of two arrays. Who knows maybe in your future you will get asked this question too. Being prepared is the key for successful interview. Without further ado, let's jump right in!

Let's analyze the task to solve:

> "Assuming an input of two number arrays, return an array that is composed of numbers they have in common."

We also must consider the constraint for this problem: "A number might appear more than once. If it appears twice in each array, the resulting array will have two instances of the same number."

Before we start to write the code, usually what I do is create a pseudocode of how to solve the problem to give us a big picture on how to solve it. In this particular case I want to solve it using `Set`

```txt
array_1 = [1,2,3,1,2,1,5,7]
array_2 = [2,1,4,8,3]

function(array_1, array_2):
  set_1 = create a new set

  loop array_1:
   push the value of each val of array_1 into set_1

  intersection_set = create a second set (for storing our intersected value)

  loop through array_2:
   check if val of array_2 val is on set_1:
     push val of array_2 into intersection_set

  return array from intersection_set
```

I will explain what happen what happen in this logic.

First of all we will use `Set` to make create an unique value. If we insert a duplicate value into `Set` it will be ignored since we already have the same value in our `Set`.

The main logic to solve this problem is simple, We need two `Set`. The first `Set` will hold unique values from the first input Array, and second `Set` will hold value for the actual intersected values from both arrays. And later on we just need to transfrom the value from intersected `Set` into Array.

Check the implementation of our logic below:

```js
function intersection(arr1, arr2) {
  let firstSet = new Set();
  for (val of arr1) {
    firstSet.add(val);
  }

  let intersectionSet = new Set();

  for (let val of arr2) {
    if (firstSet.has(val)) {
      intersectionSet.add(num);
    }
  }

  return Array.from(intersectionSet);
}
```

There are multiple ways to solve this problem. I choose to use `Set` because it make the code so much clean and easy to read. Feel free to explore to use another method to solve this problem. I hope this short article will help you in the future! Good luck Devs. ✨