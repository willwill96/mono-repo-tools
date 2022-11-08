# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->

- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g monorepo-cli
$ mono COMMAND
running command...
$ mono (--version)
monorepo-cli/0.0.0 linux-x64 node-v16.17.0
$ mono --help [COMMAND]
USAGE
  $ mono COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`mono hello PERSON`](#mono-hello-person)
- [`mono hello:world`](#mono-helloworld)
- [`mono help [COMMAND]`](#mono-help-command)

## `mono hello PERSON`

Say hello

```
USAGE
  $ mono hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/willwill96/mono-repo-tools/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mono hello:world`

Say hello world

```
USAGE
  $ mono hello:world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/willwill96/mono-repo-tools/blob/v0.0.0/dist/commands/hello/world.ts)_

## `mono help [COMMAND]`

Display help for mono.

```
USAGE
  $ mono help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mono.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

<!-- commandsstop -->
