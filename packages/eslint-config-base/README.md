<a href="https://laughing.com/">
  <img src="https://user-images.githubusercontent.com/3942799/147986660-cc494b39-559e-4534-be43-0438d0b11090.png" alt="Laughing" width="300" />
</a>

> < Tools for creators. />

<br/>

# Laughing ESLint Config

## Getting Started

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @laughing-cli/eslint-config
# or
$ yarn add -D @laughing-cli/eslint-config
```

2. Install `eslint` if not already present locally or globally

```bash
$ npm i -D eslint
# or
$ yarn add -D eslint
```

3. Create a `.eslintrc` file

4. Extend our config (you can use just the scope name as ESLint will assume the `eslint-config` suffix):

```json
{
  "extends": [
    "@laughing"
  ]
}
```

## Full example

A full example `.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@laughing"
  ]
}
```

## Vue

If you're using Vue, follow [Getting Started](#getting-started) section by replacing `@laughing-cli/eslint-config` by `@laughing-cli/eslint-config-vue`.

And in your `.eslintrc` all you need is :

```json
{
  "extends": [
    "@laughing-cli/eslint-config-vue"
  ]
}
```

## License

[MIT license](https://github.com/laughing/eslint-config/blob/master/LICENSE) - Laughing
