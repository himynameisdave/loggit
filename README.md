<div align="center" margin="0 auto 20px">
  <h1>loggit</h1>
  <p style="font-style: italic;">🌲 A simple and beautiful logging utility for NodeJS.</p>
  <div>
    <a href='https://travis-ci.com/himynameisdave/loggit'>
      <img src="https://travis-ci.com/himynameisdave/loggit.svg?branch=main" alt="Travis Badge" />
    </a>
    <a href='https://coveralls.io/github/himynameisdave/loggit?branch=main'>
      <img src='https://coveralls.io/repos/github/himynameisdave/loggit/badge.svg?branch=main' alt='Coverage Status' />
    </a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit?ref=badge_shield">
      <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Floggit.svg?type=shield" alt="FOSSA Status" />
    </a>
  </div>
</div>

---

`loggit` is a simple yet robust logger utility for NodeJS. To a degree, it is a wrapper around [`chalk`](https://www.npmjs.com/package/chalk) + `console.log`, so that I don't need to install `chalk` in every project and to standardize the way I do logging in various projects.

## Install

You can install it with NPM or Yarn:

```bash
yarn add loggit

npm install loggit
```

## Usage

`loggit` exposes two modules:

- `log` - A very simple logger function.
- `createLogger` - Returns a customized logger function.

### `log`

Provide `log` with a message string, as well as an optional color (of type [`chalk.ForegroundColor`](https://github.com/chalk/chalk/blob/02abeebac3fa41b346ad1f0b4674d371953da932/index.d.ts#L6)), and it will be logged to the console.

```typescript
import { log } from 'loggit';


log('hello world');

log('some error', 'red');
```

Argument | Type | Default
---|---|---
`message` | `string` | -
`color` | `chalk.ForegroundColor` | `'whiteBright'`

### `createLogger`

`createLogger` allows you to create loggers for various different "tasks" in your app/script. It is more akin to something like [`winston`](https://github.com/winstonjs/winston) than a regular `console.log`, in that it will log a timestamp and make your "task" very visible using a [`chalk.BackGroundColor`](https://github.com/chalk/chalk/blob/02abeebac3fa41b346ad1f0b4674d371953da932/index.d.ts#L31).

```typescript
import { createLogger } from 'loggit';

//  Create a simple logger with default options
const logInfo = createLogger('info');
//  Create a success logger, where the "task" will be logged with a green BG.
const logSuccess = createLogger('success', {
  taskColor: 'bgGreen',
});
//  Create an error logger, where the "task" will be red and the timestamp will be bright magenta.
const logError = createLogger('error', {
  taskColor: 'bgRed',
  timestampColor: 'redBright',
});

//  Use the loggers
logInfo('Started the app');

logSuccess('Things are going well');

logError('Uh oh, something went wrong');

```

This example would write the following to the console:

![An example of createLogger module, displaying three items logged to the console](https://user-images.githubusercontent.com/4298089/101206163-95ce1b80-3623-11eb-8d53-044c37a0de6c.png)

Argument | Type | Default
---|---|---
`task` | `string` | -
`config` | `CreateLoggerConfig` | See below.
`config.taskColor` | `chalk.BackgroundColor` | `'bgCyanBright'`
`config.timestampColor` | `chalk.ForegroundColor` | `'cyanBright'`

Note that `createLogger` returns the `log` function, meaning that you can also customize the message color when using your custom logger.

```typescript
import { createLogger } from 'loggit';

const logInfo = createLogger('info');

logInfo('I will be yellow!', 'yellow');
```

## Contributing

If you have ideas or suggestions on how to improve this package, feel free to file an issue or better yet open a pull request! Please follow the existing code style (enforced by ESLint anyway), and please add/alter unit tests for any new or changed functionality.

## License

Licensed under MIT.

---

_✌️ Made by [Dave](https://himynameisdave.com)_
