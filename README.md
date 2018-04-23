[![Ember Observer Score](http://emberobserver.com/badges/ember-paper-time-picker.svg)](http://emberobserver.com/addons/ember-paper-time-picker)
[![Build Status](https://travis-ci.org/devotox/ember-paper-time-picker.svg)](http://travis-ci.org/devotox/ember-paper-time-picker)
[![Coverage Status](https://codecov.io/gh/devotox/ember-paper-time-picker/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-paper-time-picker)
[![NPM Version](https://badge.fury.io/js/ember-paper-time-picker.svg)](http://badge.fury.io/js/ember-paper-time-picker)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-paper-time-picker.svg)](https://www.npmjs.org/package/ember-paper-time-picker)
[![Dependency Status](https://david-dm.org/poetic/ember-paper-time-picker.svg)](https://david-dm.org/poetic/ember-paper-time-picker)
[![DevDependency Status](https://david-dm.org/poetic/ember-paper-time-picker/dev-status.svg)](https://david-dm.org/poetic/ember-paper-time-picker#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-paper-time-picker.svg)](https://greenkeeper.io/)

ember-paper-time-picker
==============================================================================

Input with Time picker addon for [Ember Paper](https://github.com/miguelcobain/ember-paper)

[DEMO](http://devotox.github.io/ember-paper-time-picker)

Installation
------------------------------------------------------------------------------

```
ember install ember-paper-time-picker2
```


Usage
------------------------------------------------------------------------------

```handlebars
{{paper-time-picker reveal=true value=value onChange=(action (mut value))}}
```

Paper Input Options: [Ember Paper](https://github.com/miguelcobain/ember-paper)


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-paper-time-picker`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
