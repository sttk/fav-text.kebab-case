# [@fav/text.kebab-case][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a string into kebab case.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text.kebab-case
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text.kebab-case/` directory manually.*


## Usage

For Node.js:

```js
var kebabCase = require('@fav/text.kebab-case');
kebabCase('foo bar baz');  // => 'foo-bar-baz'
kebabCase('__FOO_BAR_BAZ__');  // => 'foo-bar-baz'
kebabCase('fooBarBaz');  // => 'foo-bar-baz'
```

For Web browsers:

```html
<script src="fav.text.kebab-case.min.js"></script>
<script>
var kebabCase = fav.text.kebabCase;
kebabCase('foo bar baz');  // => 'foo-bar-baz'
kebabCase('__FOO_BAR_BAZ__');  // => 'foo-bar-baz'
kebabCase('fooBarBaz');  // => 'foo-bar-baz'
</script>
```


## API

### <u>kebabCase(text) : string</u>

Converts a string into kebab case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a kebab case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word. (At a result, this function returns a string converted into lower case, e.g. `abc123`).

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

|  Type  | Description                         |
|:------:|:------------------------------------|
| string | A string converted into kebab case. |


#### <u>kebabCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

|  Type  | Description                 |
|:------:|:----------------------------|
| Array  | An array of splitted words. |

#### <u>kebabCase.join(words) : string</u>

Joins alphanumeric words and creates a kebab case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

| Type   | Description          |
|:------:|:---------------------|
| string | A kebab case string. |


## Checked                                                                      
### Node.js (4〜12)

| Platform  |   11   |   12   |
|:---------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018-2019 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text.kebab-case/
[npm-img]: https://img.shields.io/badge/npm-v1.0.3-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text.kebab-case
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.kebab-case.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text.kebab-case
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text.kebab-case?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text-kebab-case
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text.kebab-case/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text.kebab-case?branch=master
