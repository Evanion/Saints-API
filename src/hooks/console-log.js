const util = require('util');
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function consoleLog (hook) {
    console.log(util.inspect(hook));
    return Promise.resolve(hook);
  };
};
