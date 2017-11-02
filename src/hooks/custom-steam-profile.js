// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function customSteamProfile (hook) {
    if (hook.data.steam) {
      const profile = hook.data.steam.profile._json;
      hook.data.avatar = profile.avatar;
      hook.data.avatarMedium = profile.avatarmedium;
      hook.data.avatarFull = profile.avatarfull;
      hook.data.username = profile.personaname;
      hook.data.fullname = profile.realname;
      hook.data.steamProfile = profile.profileurl;
      hook.data.country = String(profile.loccountrycode).toLowerCase();
    }
    return Promise.resolve(hook);
  };
};
