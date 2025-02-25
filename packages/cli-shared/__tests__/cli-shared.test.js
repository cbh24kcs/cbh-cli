'use strict';

const cliShared = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliShared(), 'Hello from cliShared');
console.info('cliShared tests passed');
