const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');
const { hashPassword } = require('feathers-authentication-local').hooks;
const { fields } = require('../../constants');
const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: fields.common.id,
    ownerField: fields.common.id
  })
];


const customSteamProfile = require('../../hooks/custom-steam-profile');


module.exports = {
  before: {
    all: [],
    find: [commonHooks.unless(hook => commonHooks.isProvider('server'), authenticate('jwt'))], // authenticate('jwt')
    get: [ ...restrict ],
    create: [hashPassword(), customSteamProfile()],
    update: [...restrict, hashPassword(), customSteamProfile()],
    patch: [ ...restrict, hashPassword() ],
    remove: [ ...restrict ]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      )
    ],
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
