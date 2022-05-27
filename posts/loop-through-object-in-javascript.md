---
title: Loop through Object in Javascript
date: '2021-02-13'
description: Quick Guide on How to loop object in Javascript
heroImage: https://images.unsplash.com/photo-1618609256302-4332a7b98776?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170
photographer: Önder Örtel
photographerAccount: onderortel
photoProvider: unsplash
isPublished: true
tags:
  - javascript
---

One of my colleague asked me today on how to loop through objects in javascript, and I thought it will be a good opportunity to put in on a short article. 🤓

There are several of methods of looping through object in Javascript:

- `Objects.keys()`

- `Objects.values()`

- `Objects.entries()`

- `for ... in` loop

Let's look an object below

```js
const superHeroNicknames = {
  'IronMan': 'Mecha Man 🚀',
  'Thor': 'Thunder Bro 🌩',
  'Hulk': 'Green Guy 🟩'
}
```



We will use this data for the rest of this article. Let's jump to the explanation!

## 1. `Objects.keys()`

`Objects.keys()` was introduced within the release of ES6. As the name of the method says "keys", this methods will returns an array of object's keys.

```js
const keyRes = Objects.keys(superHeroNicknames);
for (let key of keyRes) {
    console.log(key + " ==> " + p[key]);
};

// Result:
// IronMan ==> Mecha Man 🚀
// Thor ==> Thunder Bro 🌩
// Hulk ==> Green Guy 🟩
```

This method is useful to get a list of the object properties quickly.

## 2. `Objects.values()`
`Objects.values()` was the opposite from `Objects.keys()`. instead returning a keys, it will returning an array of object's values. This method is very useful to get a list of all property values quickly.

```js
const keyVals = Objects.value(superHeroNicknames);
for (let val of keyVals) {
    console.log(val);
};

// Result:
// Mecha Man 🚀
// Thunder Bro 🌩
// Green Guy 🟩
```

## 3. `Object.entries()`

`Object.entries()` was introduced in ES8. This method will returns a list of an array of keys and values. This method is very useful to convert an object into an array. ✨

```js
const res = Objects.keys(superHeroNicknames);
for (let [key, val] of res) {
    console.log(`${key} ==> ${val}`);
};

// Result:
// IronMan ==> Mecha Man 🚀
// Thor ==> Thunder Bro 🌩
// Hulk ==> Green Guy 🟩
```

Please note that, this method is still not supported natively by Internet Explorer, if you are targeting those browsers polyfill may be required to do.

## 4. `for ... in` loop

`for ... in` loop method is an another way to loop through an object. This method is already supported for all browser, including Internet Explorer.

```js
for (let key in superHeroNicknames) {
      if (!superHeroNicknames.hasOwnProperty(key)) {
        //The current property is not a direct property of p
        continue;
    }
    console.log(`${key}: ${superHeroNicknames[key]}`);
}

// Result:
// IronMan ==> Mecha Man 🚀
// Thor ==> Thunder Bro 🌩
// Hulk ==> Green Guy 🟩
```

One caveat when using `for ... in` loop is **it will loop all the properties along the prototype chain**. Therefore, always make use of the `Object.hasOwnProperty()` to determine if the current property in iteration is really a property of the object. ❗️

---

That's it for this article. One final note, if you are only needed to check whether an object has a specific property, you can use `Object.hasOwnProperty()` rather than to do a loop through object and check it's properties one by one.
