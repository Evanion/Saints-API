// Initializes the `boards` service on path `/boards`
const createService = require('feathers-mongoose');
const createModel = require('../../models/boards.model');
const hooks = require('./boards.hooks');
const filters = require('./boards.filters');
const m2s = require('mongoose-to-swagger');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'boards',
    Model,
    paginate
  };

  const Service = createService(options);
  const boards = m2s(Model);

  Service.docs = {
    description: 'Forum boards/categories',
    definitions: {
      boards
    }
  };

  // Initialize our service with any options it requires
  app.use('/boards', Service);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('boards');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
