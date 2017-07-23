const boards = require('./boards/boards.service.js');
const users = require('./users/users.service.js');
const threads = require('./threads/threads.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(boards);
  app.configure(users);
  app.configure(threads);
};
