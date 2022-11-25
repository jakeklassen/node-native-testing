# Node Native Testing

Using `node --test` and [node-tap](https://node-tap.org/) for reporting.

There are various `test:*` scripts in `package.json` to mess with.

## Using [tap](http://www.node-tap.org/)

Piping the output of `node --test` for color using `tap -`.

> To parse TAP data from stdin, specify "-" as a filename.
