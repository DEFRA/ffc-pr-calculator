'use strict'

module.exports = require('neostandard')({
  globals: ['describe', 'beforeEach', 'expect', 'test', 'afterEach', 'jest', 'beforeAll', 'afterAll', 'browser', 'it', 'assert', '$', 'XMLHttpRequest'],
  ignores: ['app/dist/**/*.js'],
})
