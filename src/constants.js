const roles = {
  member: 'member',
  supporter: 'supporter',
  moderator: 'moderator',
  admin: 'admin',
  superAdmin: 'super-admin',
  moderatorRoles: ['moderator', 'admin', 'super-admin'],
  adminRoles: ['admin', 'super-admin'],
  all: ['member', 'supporter', 'moderator', 'admin', 'super-admin']
};

const fields = {
  common: {
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roles: 'roles'
  },
};

module.exports = {
  roles,
  fields
};
