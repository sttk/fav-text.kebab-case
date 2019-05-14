'use strict';

const BenchmarkTester = require('benchmark-tester');

const inputted = 'fooBarBaz';
const expected = 'foo-bar-baz';

new BenchmarkTester()
  .addTest('@fav/text.kebab-case', (kebabCase, data) => {
    return kebabCase(data);
  })
  .addTest('kebab-case', (kebabCase, data) => {
    return kebabCase(data);
  })
  .addTest('just-kebab-case', (kebabCase, data) => {
    return kebabCase(data);
  })
  .addTest('change-case', (changeCase, data) => {
    return changeCase.paramCase(data);
  })

  .verifyTest('@fav/text.kebab-case', inputted, expected)
  .verifyTest('kebab-case', inputted, expected)
  .verifyTest('just-kebab-case', inputted, expected)
  .verifyTest('change-case', inputted, expected)

  .runTest('Empty String', '')
  .runTest('From camelCase', inputted)
  .print();
