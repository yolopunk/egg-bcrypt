# egg-bcrypt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-bcrypt.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-bcrypt
[travis-image]: https://img.shields.io/travis/yolopunk/egg-bcrypt.svg?style=flat-square
[travis-url]: https://travis-ci.org/yolopunk/egg-bcrypt
[codecov-image]: https://img.shields.io/codecov/c/github/yolopunk/egg-bcrypt.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yolopunk/egg-bcrypt?branch=master
[david-image]: https://img.shields.io/david/yolopunk/egg-bcrypt.svg?style=flat-square
[david-url]: https://david-dm.org/yolopunk/egg-bcrypt
[snyk-image]: https://snyk.io/test/npm/egg-bcrypt/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-bcrypt
[download-image]: https://img.shields.io/npm/dm/egg-bcrypt.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-bcrypt

bcrypt plugin for egg, based on [bcrypt](https://github.com/dcodeIO/bcrypt.js) (Optimized bcrypt in JavaScript with zero dependencies.)

## Install
```bash
$ npm i egg-bcrypt --save
```

## Configuration
* config.default.js
```js
exports.bcrypt = {
  saltRounds: 10 // default 10
}
```
* config/plugin.js
```js
// {app_root}/config/plugin.js
exports.bcrypt = {
  enable: true,
  package: 'egg-bcrypt'
}
```

## Usage

* **[async]** To hash a password

  `@params plainText(string)`

  `@return Promise`
  
  ```js
  ctx.genHash(plainText)
  ```

* **[async]** To check a password
 
  `@params plainText (string)`

  `@params hash (string)`

  `@return Boolean true/false`

  ```js
  ctx.compare(plainText, hash)
  ```
* example

  ```js
    // {app_root}/app/contoller/user.js
    ...
    async generate() {
      const hash = await this.ctx.genHash(this.ctx.request.body.plainText);
      // Store hash in your password DB
      ...
    }

    async compare() {
      const { hash, plainText } = this.ctx.request.body;
      const checked = await this.ctx.compare(plainText, hash);
      this.ctx.body = { checked };
    } 
    ...
  ```
## License

[MIT](LICENSE)
