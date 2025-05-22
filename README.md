# Node Native Testing

Using `node --test` for some testing 🧪.

There are various `test:*` scripts in `package.json` to mess with.

## Using [tap](http://www.node-tap.org/)

Piping the output of `node --test` for color using `tap -`.

> To parse TAP data from stdin, specify "-" as a filename.

## Setup

Note the separation of `Javascript` and `TypeScript` files within `lib/js` and `lib/ts` respectively. This is to prevent TypeScript from getting
confused with the `Javascript` files. This will manifest as the `*.js` files being skipped when running `tsc` for type checking. This will also
manifest as these files not properly showing type errors in the IDE.

This is true even if `noEmit` is set to `true` in `tsconfig.json`.

You _can_ get IDE feedback by adding this to `.vscode/settings.json`:

```json
{
  // Because I am testing TS/JS files in the same directory with the same name -
  // other than the extension name - I need to set this to true to force the
  // type checker to check the JS files as well.
  "js/ts.implicitProjectConfig.checkJs": true
}
```

But I don't think this is the best way to go about it.
