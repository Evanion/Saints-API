// Initializes the `threads` service on path `/threads`
const createService = require('feathers-mongoose');
const createModel = require('../../models/threads.model');
const hooks = require('./threads.hooks');
const filters = require('./threads.filters');
const m2s = require('mongoose-to-swagger');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'threads',
    Model,
    paginate
  };

  const Service = createService(options);
  const threads = m2s(Model);

  Service.docs = {
    description: 'Forum threads',
    definitions: {
      threads
    }
  };

  // Initialize our service with any options it requires
  app.use('/threads', Service);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('threads');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
