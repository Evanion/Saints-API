// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const roles = require('../constants').roles;
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    username: {type: String, unique: true},
    avatar: {type: String},
    avatarMedium: {type: String},
    avatarFull: {type: String},
    fullname: {type: String},
    steamProfile: {type: String},
    country: {type: String},
    email: {type: String, unique: true},
    roles: {type: Array, enum: roles.all},

    password: { type: String},
    googleId: { type: String },
    facebookId: { type: String },
    steamId: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};
