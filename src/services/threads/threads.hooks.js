const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');
const {roles, fields} = require('../../constants');
const threadConst = require('./threads.const');

const whoCanEdit = hooks.restrictToRoles({
  roles: roles.moderatorRoles,
  fieldName: fields.common.roles,
  idField: fields.common.id,
  ownerField: threadConst.fields.owner,
  owner: true
});

const authorSchema = {
  include: [{
    service: 'users',
    nameAs: threadConst.fields.owner,
    parentField: threadConst.fields.owner,
    childField: fields.common.id
  }]
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      hooks.associateCurrentUser({
        idField: fields.common.id,
        as: threadConst.fields.owner
      })
    ],
    update: [
      authenticate('jwt'),
      whoCanEdit
    ],
    patch: [
      authenticate('jwt'),
      whoCanEdit
    ],
    remove: [
      authenticate('jwt'),
      whoCanEdit
    ]
  },

  after: {
    all: [populate({schema: authorSchema})],
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
