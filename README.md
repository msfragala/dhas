# dhas [![Build Status](https://www.travis-ci.org/msfragala/dhas.svg?branch=master)](https://www.travis-ci.org/msfragala/dhas)

> Check whether an object owns deep properties

## Why

Super small implementation — only 160 bytes!

You could write this yourself, but then you'd have to write [tests](https://github.com/msfragala/dhas/blob/master/test.js).

Supports ES Modules, CommonJS and UMD.

## Installation

```sh
npm install dhas
```

## Usage

```js
import dhas from 'dhas';
const object = { a: { b: { c: null, d: undefined, e: 'string' } } };

// returns true even for null and undefined values
dhas(object, 'a.b.c'); // true
dhas(object, 'a.b.d'); // true

// first argument can be an object OR an array
dhas(object, 'a.b'); // true
dhas([0,1,2,3], '0'); // true

// second paramter can be a string (delineated by dots) OR an array of strings
dhas(object, 'a.b.c'); // true
dhas(object, ['a', 'b', 'c']); // true
```

## Similar libraries

For _getting_ deep object properties, check out [`dlv`](https://github.com/developit/dlv)</br>
For _setting_ deep object properties, check out [`dset`](https://github.com/lukeed/dset)

This library was heavily inspired by both!

## License

[MIT](https://oss.ninja/mit/msfragala/)
