// Initializes the `users` service on path `/users`
const createService = require('feathers-mongoose');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const filters = require('./users.filters');
const m2s = require('mongoose-to-swagger');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'users',
    Model,
    paginate
  };

  const Service = createService(options);
  const users = m2s(Model);

  Service.docs = {
    description: 'User information',
    definitions: {
      users
    }
  };

  // Initialize our service with any options it requires
  app.use('/users', Service);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
