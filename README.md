# itamae

## Description

The `itamae` app is an easy to use digital recipe app built with Ember, Electron, and Optical Character Recognition.

An itamae (板前) is a cook in a Japanese kitchen and can be translated literally as "in front of the [cutting] board."

## Installation

Clone repository and install dependencies:

```
$ git clone git@github.com:acareaga/itamae.git
$ cd tetris
$ npm install
```

## Usage

Fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run the application.
* `http://localhost:8080/webpack-dev-server/test.html` to run the test suite in the browser.

To build the static files:

```js
`ember build` (development)
`ember build --environment production` (production)
```

To run tests in Mocha:

```js
mocha
```

## Dependencies

Uses with the following versions:

```
"ember-cli": "2.3.0",
"file-bin": "0.2.0"
```

## Contributing

To submit patches:
* Fork this repository
* Implement the desired feature with tests (and documentation if necessary)
* Submit a pull request

### Future

Features that would be nice to include:

Please open an issue if you have any other updates that would be nice to have.

## License

The `itamae` codebase is released under the [MIT license](https://opensource.org/licenses/MIT).
