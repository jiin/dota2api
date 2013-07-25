var request = require('request'),
    fs      = require('fs');


var Dota2Api = function(key) {
  this.key  = key;
  this.init = 'https://api.steampowered.com';
  this.v    = 'v0001';
}

Dota2Api.prototype.getMatchDetails = function(id, cb) {
  var config = {
    match_id: id
  };

  this.request('IDOTA2Match_570', 'GetMatchDetails', config, cb);
}

Dota2Api.prototype.getByDate = function(date, cb) {
  var ts   = Math.round(new Date().getTime() / 1000), // get seconds since epoch
  from = date.from || ts,
  to   = date.to   || ts;

  from = (from instanceof Date) ? from.getTime() : parseInt(from);
  to   = (to   instanceof Date) ? to.getTime()   : parseInt(to);

  var config = {
    date_min: from,
    date_max: to
  };

  this.request('IDOTA2Match_570', 'GetMatchDetails', config, cb);
}

Dota2Api.prototype.getMatchHistory = function(config, cb) {
  if (typeof config !== 'object')
    throw new Error('TypeError: configuration must be an object');

  this.request('IDOTA2Match_570', 'getMatchHistory', config, cb);
}

Dota2Api.prototype.getByPlayerName = function(player_name, cb) {
  var config = {
    player_name: player_name
  };

  this.request('IDOTA2Match_570', 'getMatchHistory', config, cb);
}

Dota2Api.prototype.getByHeroID = function(hero_id, cb) {
  var config = {
    hero_id: hero_id
  };
  
  this.request('IDOTA2Match_570', 'getMatchHistory', config, cb);
}

Dota2Api.prototype.getByLeague = function(league_id, cb) {
  var config = {
    league_id: league_id
  };
  
  this.request('IDOTA2Match_570', 'getMatchHistory', config, cb);
}

Dota2Api.prototype.getByAccountID = function(account_id, cb) {
  var config = {
    account_id: account_id
  };
  
  this.request('IDOTA2Match_570', 'getMatchHistory', config, cb);
}

Dota2Api.prototype.getReplayUrl = function(cluster, match_id, replay_salt) {
  return 'http://replay' + cluster + '.valve.net/570/' + match_id + '_' + replay_salt + '.dem.bz2';
}

Dota2Api.prototype.getHeroes = function(cb) {
  var config = {
    language: 'en'
  };

  this.request('IEconDOTA2_570', 'GetHeroes', config, cb);
}

Dota2Api.prototype.param = function(fields, values) {
  
  fields = fields.map(function (item) {
    return item + '=' + values.shift();
  });

  return '?' + fields.join('&');
}

Dota2Api.prototype.request = function(prefix, method, config, cb) {

  if (!config.hasOwnProperty('key'))
    config.key = this.key;

  var fields = Object.keys(config),
  values = fields.map(function (v) { 
    return config[v];
  });

  var url = [this.init, prefix, method, this.v, this.param(fields, values, this.key)].join('/');

  request(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var res = JSON.parse(body);

      cb(err, res.result);
    }
  });
}

module.exports = Dota2Api;