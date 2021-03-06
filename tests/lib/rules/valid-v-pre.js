/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/valid-v-pre')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('valid-v-pre', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: ''
    },
    {
      filename: 'test.vue',
      code: '<template><div v-pre></div></template>'
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: '<template><div v-pre:aaa></div></template>',
      errors: ["'v-pre' directives require no argument."]
    },
    {
      filename: 'test.vue',
      code: '<template><div v-pre.aaa></div></template>',
      errors: ["'v-pre' directives require no modifier."]
    },
    {
      filename: 'test.vue',
      code: '<template><div v-pre="aaa"></div></template>',
      errors: ["'v-pre' directives require no attribute value."]
    }
  ]
})
