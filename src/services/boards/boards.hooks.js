const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const {roles, fields} = require('../../constants');

const onlyAdmins = hooks.restrictToRoles({
  roles: roles.adminRoles,
  fieldName: fields.common.roles,
  idField: fields.common.id
});

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      onlyAdmins
    ],
    update: [
      authenticate('jwt'),
      onlyAdmins
    ],
    patch: [
      authenticate('jwt'),
      onlyAdmins
    ],
    remove: [
      authenticate('jwt'),
      onlyAdmins
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
