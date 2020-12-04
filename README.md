# loggit [![npm](https://img.shields.io/npm/v/loggit.svg?style=flat-square)](https://www.npmjs.com/package/loggit)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit?ref=badge_shield)

Minuscule node module for loggin' things in a pretty & more visible way. Also created because I got sick of writing out `console.log()` all the time and this is better solution. Uses [chalk](https://www.npmjs.com/package/chalk) to do the colors, so check that out if you're just looking for colors in the console and not a full-on logger like this one.

### Install

This presumes that you've installed node and know how to install an npm module:

```bash
npm install loggit
```

### Usage

Usage is simple, just require `loggit` into script...

```javascript
var loggit = require('loggit');
```

...and then use it by supplying your message as a string:
```javascript
loggit('Dave is my homeboy!');
```

...which would result in the following:

![console](http://i.imgur.com/EsA89TL.png)

---

### Options

What good is a module without any options? In addition to your message, you can also specify the color and the symbol that are used.

```bash
loggit(msg, color, symbol);
```

#### `msg`
***Required,** string, array, object*

This is the only required paramater. If it is a string it will simply be outputted as shown above. Arrays and objects passed in will be pretty printed out so that you don't have that ugly `[object Object]` output.

**Example:** this...
```bash
loggit('I\'m just a string!');
loggit([ 'we\'re', 'an', 'array', 'of', 'strings' ]);
loggit({
  foo: {
    bar: 'we\'re',
    baz: 'an',
    roo: 'object',
    arr: [
      'this', 'is', 'cool'
    ]
  }
});
```
...results in this...

![console](http://i.imgur.com/A7WPULc.png)


#### `color`
*optional, string*

Supply a valid [chalk](https://www.npmjs.com/package/chalk) color (red, green, magenta, underline, bgYellow, etc..) and that color will be used for the entire log. Yellow is used by default if no paramater is provided.

**Example:** this...
```bash
loggit('There will be blood...', 'red');
```
...results in this...

![otherconsole](http://i.imgur.com/2fcGVMy.png)

#### `symbol`
*optional, string*

Supply a one or two character pattern that will be repeated for the top and bottom lines of your log (so that it is more visible amongst your various other console messages). The `*` is used by default. If you provide a string longer than two characters, just the first two characters will be used.

**Example:** this...
```bash
loggit('Radical, dude!', 'magenta', '!~');
```
...results in this...

![otherotherconsole](http://i.imgur.com/T4qUazu.png)

---

### Contribute

Feel free to fork the shit outta this thing or [hit me up on Twitter](https://twitter.com/dave_lunny) if you've got a comment or suggestion.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit?ref=badge_large)