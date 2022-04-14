---
title: Scope of Variables 3
date: '2020-05-15'
description: Test Scope
heroImage: https://images.pexels.com/photos/11434595/pexels-photo-11434595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
photographer: Gaspar Zaldo
photographerAccount: gaspo3
photoProvider: pexels
isPublished: true
tags:
  - javascript
  - react
---

Variabel memiliki scope / jangkauan terhadap blok program / fungsi. Jika di [artikel variabel & constants ini](/js101/introduction/1-variables-constants/) kita sudah membahas sedikit perihal scope dari suatu variabel dengan keyword `var`, `let`, dan `const`. Kali ini kita akan membahas lebih dalam serta contoh bagaimana kita  dapat mengetahui jangkauan dari variabel.

### Local & Global

Berdasarkan jangkauannya, variable dapat dibedakan menjadi 2 yaitu, _local_ dan _global_. Mari kita lihat di code berikut:

```js
const CURRENT_YEAR = 2020;

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  birth: {
    year: 1994,
    month: 07,
    day: 16,
  },
};

function getShortProfile(user) {
  const fullName = `${user.firstName} ${user.lastName}`;
  const age = CURRENT_YEAR - user.birth.year;

  const profile = {
    ...user,
    fullName,
    age,
  };

  console.log('profile - getShortProfile', profile);

  return profile;
}

const shortProfile = getShortProfile(profile);

console.log('profile - global', profile);

console.log(
  `Halo ${shortProfile.fullName}`,
  `You're ${shortProfile.age} years old`
);
```

Output:

```
profile - getShortProfile {
  firstName: 'John',
  lastName: 'Doe',
  birth: { year: 1994, month: 7, day: 16 },
  fullName: 'John Doe',
  age: 26
}

profile - global {
  firstName: 'John',
  lastName: 'Doe',
  birth: { year: 1994, month: 7, day: 16 }
}

Halo John Doe You're 26 years old
```

Ada beberapa hal yang perlu diperhatikan yaitu:

- `CURRENT_YEAR` dan `profile` yang didefinisikan diluar blok fungsi dapat disebut dengan variabel _global_, dan dapat diakses lewat dalam blok fungsi `getShortProfile`.

- `CURRENT_YEAR` digunakan untuk menghitung nilai `age` didalam `getShortProfile`, tanpa ada masalah.

- `profile` didalam `getShortProfile` berbeda dengan variabel `profile` yang didefinisikan di luar function. `profile` yang berada didalam hanya berlaku didalam / local functionnya saja, oleh karena itu disebut dengan `local` variable.

  Ini dibuktikan dengan mencetak kedua variabel dengan perintah `console.log` yang menghasilkan nilai yang berbeda namun dengan nama variabel yang sama.

Oke dari code diatas terbukti ya kalo perbedaan antara local dan global variabel. E tapi ada pertanyaan ni.

![](https://media.giphy.com/media/JTgBY1JUFHHGM/giphy.gif)

**Q:** gimana kalo kita definisikan variabel didalam function terus, I mau akses di luar function apakah bisa gan?

**A:** nga, ngga bisa, karena jangkauan nya variabel yang didefinisikan didalam function merupakan variabel local, jika keluar dari block nya akan tak terdefinisi. Mari kita buktikan dengan code berikut:

```js
function greeting() {
  const username = 'John';
  return username;
}

// mencoba akses username didalam function greeting
console.log(username);
```

ketika dirunning, program akan menghasilkan _Reference error: username is not defined_. Artinya variabel `username` yang didefinisikan di dalam function `greeting` tidak dapat dikenali selain didalam function `greeting`.

Okay mungkin cukup untuk bahasan scsope dalam variabel ini, kita akan bahas callback function dalam artikel berikutnya, have a good friday guys. Oiya, kalo bingung atau menemukan kesalahan dalam artikel ini, silahkan mention gue di twitter [@yohanes_dev](https://twitter.com/yohanes_dev).

Cheers 🥂
