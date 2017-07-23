const assert = require('assert');
const app = require('../../src/app');

describe('\'threads\' service', () => {
  it('registered the service', () => {
    const service = app.service('threads');

    assert.ok(service, 'Registered the service');
  });
});
