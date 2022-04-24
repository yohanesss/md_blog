---
title: Introduction to Regex
date: '2020-09-04'
description: What is Regex? and What Are Its Benefits in Programming? Let's learn together!
heroImage: https://images.pexels.com/photos/11803610/pexels-photo-11803610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
photographer: Naufal Shidqi
photographerAccount: naufal-shidqi-212558394
photoProvider: pexels
isPublished: true
tags:
  - javascript
  - regex
---

Have you ever created a password, and there we were asked to use capital letters, numbers, and symbols? And if so, how could we do it? Are we gonna split the input string, and then check for each character if all the criteria is matched? Let's see the implementation below for validating password.

```js
function validatePassword(input) {
  // list of special character
  let specialChars = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}',';','~','?','/','<','>',',','.','|','\\', ':'];

  const validLength = input.length > 6 ? true : false;
  let validCapital = false;
  let validNumber = false;
  let validSpecialChar = false;
  const isSpecialCharacter = (char => specialChars.includes(char));
  const isCapitalcase = (char => char.toUpperCase() === char);
  const isNumber = (char => [1,2,3,4,5,6,7,8,9,0].includes(parseInt(char)))

  const _input = input.split('');
  _input.forEach(_input => {
    if(isNumber(_input)) validNumber = true;
    if(isSpecialCharacter(_input)) validSpecialChar = true;
    if(!isNumber(_input) && !isSpecialCharacter(_input) && isCapitalcase(_input)) validCapital = true;
  });

  if (validLength && validCapital && validNumber && validSpecialChar) {
    return true;
  } else {
    console.log('error creating password!');
    return false;
  }
}
```

It's *complex*, right? Lo and behold the power of regex

```js
function validatePasswordRegex(input) {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(input);
}
```

Our code will become so much clearer in an instant ✨. *(and in so mysterious way...)*
Worry not! I will give you an introduction about regex in this article.

Regex stands for **Regular Expression** and it is basically an easy way to define a pattern of text. Regex is often used for input validation or text identification.

At first glance, Regex is like a gibberish text. However for those who know how to use it, it will be one of powerful tools in their disposal 🛠.

I have listed some commonly used tokens in Regex to help us. 📖

| Tokens          | Represent                      |
| :-----------:   | :----------------------------- |
| \d              | Any Digit                      |
| \D              |	Any Non-digit character        |
| .	              | Any Character                  |
| &#92;.          | Period                         |
| [abc]	          | Only a, b, or c                |
| [^abc]	        | Not a, b, nor c                |
| [a-z]	          | Characters a to z              |
| [0-9]	          | Numbers 0 to 9                 |
| \w	            | Any Alphanumeric character     |
| \W	            | Any Non-alphanumeric character |
| {m}	            | m Repetitions                  |
| {m,n}	          | m to n Repetitions             |
| *	              | Zero or more repetitions       |
| +	              | One or more repetitions        |
| ?	              | Optional character             |
| \s	            | Any Whitespace                 |
| \S	            | Any Non-whitespace character   |
| ^…$	            | Starts and ends                |
| (…)	            | Capture Group                  |
| (a(bc))	        | Capture Sub-group              |
| (.*)	          | Capture all                    |
| (abc&#124;def)	| Matches abc or def             |

First thing to note, when we are using regex **everything is a character** and we are writing patterns to match a specific sequence (pattern).

```js
// alphabet abc
/abc/.test('abcd'); // match ✅
/abc/.test('abc'); // match ✅
/abc/.test('abcde');  // match ✅
```

Look at the example above, `abc` is our pattern, we are done our first regex 🎉. It's as simple as the common letters on each line.

```js
// number 123
/123/.test('bgh123'); // match ✅
/123/.test('const number = 123'); // match ✅
/123/.test('1 + 2 + 123 = 125');  // match ✅
```

We can see `123` (which is number) is also treated as character in regex.

```js
// dot .
/...\./.test('asd.a'); // match ✅
/...\./.test('12345'); // skip ❌
/...\./.test('123.s'); // match ✅
```

`.` dot operator in regex is also known as a **wildcard** because it can match any character. However in the example above we can use `\.` to actually specify the `.` ("dot") to be in our pattern.

```js
// brackets ['asdf']
/[FfR]oot/.test('Foot'); // match ✅
/[FfR]oot/.test('Root'); // match ✅
/[FfR]oot/.test('foot'); // match ✅
/[FfR]oot/.test('Moot'); // skip ❌
```

While the `.` metacharacter is pretty powerful to match all the character, we need to somehow add a boundary to match to specific characters. We could do that by using `[]` brackets notation. In our example we use `[FfR]` as our pattern, therefore only F, f or R letter will be match and nothing else.

```js
// inverse within brackets [^]
/[^FfR]oot/.test('Moot'); // match ✅
/[^FfR]oot/.test('Boot'); // match ✅
/[^FfR]oot/.test('Foot'); // skip ❌
```

We also could use an `[^]` "inverse within brackets" to excluding specific characters, if there is any character in our test that are same as the characters inside our brackets it will be not match.

```js
// Character ranges
/[A-D][c-h][b-e]/.test('Ade'); // match ✅
/[A-D][c-h][b-e]/.test('Dfd'); // match ✅
/[A-D][c-h][b-e]/.test('Erd'); // skip ❌
```

We can specify a "range" of sequential characters by using the `-` "dash" within `[]` "brackets" to indicate a character range. We could specify a digit `[1-7]`, or even with inverse notation `[^a-f]`. Notice that `a-z` "lowercase" and `A-Z` "uppercase" are different, so make sure we put it both if we want all the alphabets to be match. `[A-Za-z0-9_]` this pattern is equivalent for `\w` which stands for match for any alphanumeric characters. And `\W` can be used to specify non-alphanumeric characters.

```js
// Curly brace repetitions
/hel{3}o/.test('helllo'); // match ✅
/hel{3}o/.test('hello'); // skip ❌
/hel{3,7}o/.test('hellllllo'); // match ✅
/hel{3,7}o/.test('hello'); // skip ❌
```

We can speficy a number of repetitions for a character we want to match by using `{a, b}` where `a` is a minimal number of repetitions, and `b` is maximum number of repetitions. If `b` is not specified, then the repetitions must be exactly same as `a`. In our example we specify `hel{3}o`, which means `l` character must be repeated 3 times to be match, otherwise it will be not match. `hel{3,7}o` means `l` character must be repeated between 3 until 7 to be match.

```js
// Plus (+) and star (*) quantifier
/o+l*m+/.test('ooolllmm'); // match ✅
/o+l*m+/.test('ooomm'); // match ✅
/o+l*m+/.test('mmm'); // skip ❌
/o*l*m+/.test('mmm'); // match ✅
```

How can we match the character to be at least 1 or more character that it follows? Meet the `+` "plus" quantifier. There are also `*` star quantifier, which can be used to represents either 0 or more of the character that it follows.

```js
// Question Mark (?) optional
/\d+ files? is found/.test('1 file is found 💾'); // match ✅
/\d+ files? is found/.test('4 files is found 💾'); // match ✅
/\d+ files? is found/.test('No files is found 💾'); // skip ❌
```

In the example above, we could give our pattern more flexibility by specify an optional character using `?` "question mark" into our patterns. In our example we using `?` to specifying wheter our statement is singular or plural. "1 file found" (singular) and "4 files is found" (plural), and both is matching ✅.

```js
// Whitespaces
/white\s+space/.test('white space'); // match ✅
/white\s+space/.test('white     space'); // match ✅
/white\s+space/.test('whitespace'); // skip ❌
/white\S+space/.test('whites space'); // skip ❌
/white\S+space/.test('whites_space'); // match ✅
```

Do you know that space, tab, newline, carriage return, form feed and vertical tab characters are called "whitespace characters"? We could use `\s` to specify a "whitespace" in our pattern. There are also `\S` (with capital "S") to specify "non-whitespace" character (e.g: alphanumeric and special characters).

```js
// Hat (^) and dollar sign ($) - Start ... End
/^Start your day with orange 🍊$/.test('Start your day with an orange 🍊'); // match ✅
/^Start your day with/.test('Start your day with an apple 🍎'); // match ✅
/with orange 🍊$/.test('Finish your day with an orange 🍊'); // match ✅
/^Start your day with 🍊/.test('    Start your day with an orange 🍊'); // skip ❌
/^Start your day with orange 🍊$/.test('   Start your day with an orange 🍊  '); // skip ❌
```

So far we are matching the text regardless the position of the character, whether it is on start, middle or near the end of the text. How could we make a boundaries to search the text that must be start in ... and end with ... In that case, we use `^` "hat" and `$` to match a pattern. In our example above `Start your day with orange 🍊` we see that the pattern that didn't start with `^` is can be match regardless of whitespace or even incorrect sentence, it is also same with the pattern that didn't end with `$`. One last note `[^]` (inversion) is *different* than `^` (start with).

```js
// Matching Group (...)
('js_basic.txt').match(/^(js_.+)\.txt$/); // capture: "js_basic" ✅
('js_intermediate.txt').match(/^(js_.+)\.txt$/); // capture: "js_intermediate" ✅
('js_101.xls').match(/^(js_.+)\.txt$/); // capture: null ❌
('python.txt').match(/^(js_.+)\.txt$/); // capture: null ❌
```

Is it possible to extract data from our matching text so we can use that? 🙋🏻‍♀️ Yes it is! We can do that by defining groups of characters and capturing them using the  `(...)` "parantheses". In our example above, we write a simple pattern that captures everything from the start of `js_` until the extension `.txt`.

```js
// Matching Nested Group (..(...))
('18200 BaldwinAve').match(/(\d+ (\w+))/); // capture: "18200 BaldwinAve" and  "BaldwinAve" ✅
('17200 FairwayDr').match(/(\d+ (\w+))/); // capture: "17200 FairwayDr" and "FairwayDr" ✅
```

We also could do a match a nested group by using `(..)` inside another `(...)`. In our example above, we are do a match for a street number the outer group is able to capture full address. And the inner group we are able to capture the street name. 🏘

```js
// Using quantifier inside our group match (...*)
('1376x768').match(/(\d+)x(\d+)/); // capture: "1366" and  "768" ✅
('400x200').match(/(\d+)x(\d+)/); // capture: "400" and  "200" ✅
```

In the example above, using regex we can get the value of `width` and `height` of screen resolution. Note that we are using two group match in our pattern `\d+` is used to catch all the number.

```js
// Conditional using "pipe" |
/(Apple🍎|Orange🍊|Pineapple🍍) is my favorite fruit/.test('Apple🍎 is my favorite fruit'); // match ✅
/(Apple🍎|Orange🍊|Pineapple🍍) is my favorite fruit/.test('Pineapple🍍 is my favorite fruit'); // match ✅
/(Apple🍎|Orange🍊|Pineapple🍍) is my favorite fruit/.test('Strawberry🍓 is my favorite fruit'); // skip ❌
```

We also can specify a conditioning in our regex pattern by using `|` "pipe". In this example we try to match whether our favorite fruit is either `Apple🍎`, `Orange🍊`, or `Pineapple🍍`. Other than that will be no match.

![](https://media1.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif?cid=ecf05e47zlcz90gn7b8357bres65p3hfg7fg23i357e8e6td&rid=giphy.gif&ct=g)

Congrats for making this far! 🎉 You are now know the basic of regex. Let's see our first regex in this article for validating password. Let's glance it once more.

```js
function validatePasswordRegex(input) {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(input);
}
```

Are you able to know what this regex do now? If you are able to read it, congrats! 🎉 Let's walkthrough together.

Our `validatePasswordRegex()` has 4 condition for validating a password.

- `(?=.*\d)` is used to match whether there is a number in our input.

- `(?=.*[a-z])` is used to match if there is a lowercase character in our input.

- `(?=.*[A-Z])` is used to match if there is an uppercase character in our input.

- `.{6,}` it used to make sure if there are minimal 6 character in our input.

I hope this article could help you in your journey of learning regex 🤓. You could try [regexr](https://regexr.com/) if you want messing around with it. Thank you for reading and good luck! ✨